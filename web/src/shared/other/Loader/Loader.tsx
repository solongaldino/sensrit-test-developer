import { Spinner } from "reactstrap";
import useLoader from "../../../hooks/useLoader";
import "./Loader.css";

export default function Loader(): JSX.Element {
  const { loading } = useLoader();

  if (loading) {
    return (
      <div className="app-loader">
        <Spinner color="secondary">Loading...</Spinner>
      </div>
    );
  } else {
    return <></>;
  }
}
