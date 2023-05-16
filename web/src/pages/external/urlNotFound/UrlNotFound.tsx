import { Link } from "react-router-dom";
import { GiAlienBug } from "react-icons/gi";
import { TbError404 } from "react-icons/tb";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

interface IProps {
  url: string;
}

export default function UrlNotFound({ url }: IProps): JSX.Element {
  return (
    <div className="container-fluid">
      <Row className="mt-5">
        <Col></Col>
        <Col className="mt-5 col-6 d-flex justify-content-center ">
          <Card>
            <CardBody>
              <CardTitle className="text-center">
                {" "}
                <TbError404 className="me-1" size={30} />
                <span>
                  Url not found : <code>{url}</code>
                </span>
              </CardTitle>
              <CardSubtitle className="mb-2 text-muted"></CardSubtitle>
            </CardBody>
            <CardBody className="text-center">
              <GiAlienBug size={150} />
            </CardBody>
            <CardBody className="text-center">
              <CardText>Sorry, we couldn't find this page</CardText>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="w-100 br-7" color="primary" type="submit">
                <Link className="text-light text-decoration-none" to="/">
                  Return to home page
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}
