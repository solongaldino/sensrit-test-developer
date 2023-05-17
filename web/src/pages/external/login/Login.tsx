import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function Login() {
  return (
    <div className="m-5 d-flex justify-content-center">
      <Card className="mt-5 mb-5 app-external-card" color="light">
        <CardBody>
          <CardTitle tag="h5" className="text-center">
            Log In
          </CardTitle>
          <LoginForm />
          <CardText className="text-center">
            <Link to="/recover-password">Forget Password?</Link>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
