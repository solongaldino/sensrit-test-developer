import { useState, createContext } from "react";
import { Loader } from "../shared/other";

export interface ILoaderContext {
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}

const useService = () => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return { loading, showLoader, hideLoader };
};

export const LoaderContext = createContext<ILoaderContext>({
  loading: false,
  showLoader: async () => {
    return;
  },
  hideLoader: async () => {
    return;
  },
});

interface IArgsLoaderProvider {
  children: JSX.Element;
}

export const LoaderProvider = ({ children }: IArgsLoaderProvider) => (
  <LoaderContext.Provider value={useService()}>
    <Loader />
    {children}
  </LoaderContext.Provider>
);
