import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import CreateCustomerForm from "./CreateCustomerForm";

export default function Customers() {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Clientes</h2>
      </div>
      <div className="d-flex justify-content-center">
        <Card color="light app-backoffice-card p-2">
          <CardBody>
            <CardTitle tag="h5" className="text-center pb-4">
              Cadastrar Cliente
            </CardTitle>
            <CardText>
              <CreateCustomerForm />
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
