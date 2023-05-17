import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AlertDialogsProvider from "./contexts/AlertDialogs";
import { LoaderProvider } from "./contexts/Loader";
import { Router } from "./routing";
import { AuthProvider } from "./contexts/Auth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function App() {
  return (
    <>
      <LoaderProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AlertDialogsProvider>
              <Router />
            </AlertDialogsProvider>
          </AuthProvider>
        </QueryClientProvider>
      </LoaderProvider>
    </>
  );
}
