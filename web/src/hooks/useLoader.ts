import { useContext } from "react";
import { LoaderContext, ILoaderContext } from "../contexts/Loader";

export default function useLoader(): ILoaderContext {
  return useContext(LoaderContext);
}
