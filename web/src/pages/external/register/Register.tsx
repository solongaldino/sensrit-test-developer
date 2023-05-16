import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import RegisterForm from "./RegisterForm";

export default function Register(): JSX.Element {
  return (
    <div className="m-5 d-flex justify-content-center">
      <Card className="mt-5 mb-5 app-external-card" color="light">
        <CardBody>
          <CardTitle tag="h5" className="text-center">
            Register
          </CardTitle>
          <RegisterForm />
          <CardText className="text-center">
            <Link to="/login">Return to Login</Link>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
