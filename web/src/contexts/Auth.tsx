import { useState, useEffect, createContext } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useInterval } from "../hooks";
import axios, { AxiosResponse } from "axios";

export interface IAuthContext {
  user: ILoggedUser | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: (withLoading: boolean) => Promise<void>;
}

export interface ILoggedUser {
  id: string;
  name: string;
  email: string;
  accessToken: string;
}

interface ILoginResponseAPI {
  id: string;
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}

interface IRefreshResponseAPI {
  id: string;
  name: string;
  email: string;
  accessToken: string;
}

//TODO implantar serviço de variavel de ambiente
const authTokenKeyLocalStorage = process.env
  .REACT_APP_TOKEN_KEY_LOCAL_STORAGE as string;

const endpoint = process.env.REACT_APP_API_URL;

const useService = () => {
  const [user, setUser] = useState<ILoggedUser | null>(null);
  const [loading, setLoading] = useState(true);

  async function login(email: string, password: string): Promise<void> {
    const response: AxiosResponse<ILoginResponseAPI> = await axios.post(
      `${endpoint}/auth/login`,
      {
        email,
        password,
      }
    );

    localStorage.setItem(authTokenKeyLocalStorage, response.data.refreshToken);

    setUser({
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      accessToken: response.data.accessToken,
    });
  }

  const logout = async (): Promise<void> => {
    //TODO Implementar chamada de logout a API
    localStorage.removeItem(authTokenKeyLocalStorage);
    setUser(null);
  };

  let expired = true;

  if (user?.accessToken) {
    const decoded = jwtDecode(user.accessToken) as JwtPayload;
    expired = !user?.accessToken || (decoded.exp ?? 0) >= new Date().valueOf();
  }

  const refresh = async (withLoading = false) => {
    const refreshToken = localStorage.getItem(authTokenKeyLocalStorage);
    if (refreshToken) {
      withLoading && setLoading(true);
      try {
        const response: AxiosResponse<IRefreshResponseAPI> = await axios.post(
          `${endpoint}/auth/refresh-token`,
          {
            refreshToken,
          }
        );

        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          accessToken: response.data.accessToken,
        });
      } catch {
        setUser(null);
        localStorage.removeItem(authTokenKeyLocalStorage);
      }
      withLoading && setLoading(false);
    } else if (expired) {
      setUser(null);
      withLoading && setLoading(false);
    }
  };

  useEffect(() => {
    refresh(true);
  }, [expired]);

  useInterval(() => refresh(), 1000 * 60 * 5); // 5 mins

  return { user, loading, login, logout, refresh };
};

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  login: async () => {
    return;
  },
  logout: async () => {
    return;
  },
  refresh: async () => {
    return;
  },
});

interface IArgsAuthProvider {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IArgsAuthProvider) => {
  const auth = useService();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
