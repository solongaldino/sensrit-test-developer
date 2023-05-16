import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AlertDialogsProvider from "./contexts/AlertDialogs";
import { LoaderProvider } from "./contexts/Loader";
import { Router } from "./routing";

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
          <AlertDialogsProvider>
            <Router />
          </AlertDialogsProvider>
        </QueryClientProvider>
      </LoaderProvider>
    </>
  );
}
