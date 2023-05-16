import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NavBackoffice from "./BackofficeNav";

interface IArgs {
  children: JSX.Element;
  isFirstActivation: boolean;
}

export default function BackofficeTemplate({
  children,
  isFirstActivation,
}: IArgs) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggle = () => setIsOpenModal(!isOpenModal);

  const projectName = process.env.REACT_APP_PROJECT_NAME;

  return (
    <div>
      <div className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap py-2 shadow">
        <Link
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6"
          to={"/backoffice"}
        >
          {projectName ? projectName : "Project Name"}
        </Link>
        <Button
          className="navbar-toggler d-md-none m-2 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded={isOpenModal}
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <Modal isOpen={isOpenModal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Menu</ModalHeader>
          <ModalBody>
            <NavBackoffice isFirstActivation={isFirstActivation} />
          </ModalBody>
        </Modal>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-md-3 col-lg-2 d-md-block bg-light h-100 border position-fixed sticky
           sidebar collapse`}
            id="sidebarMenu"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <NavBackoffice isFirstActivation={isFirstActivation} />
            </div>
          </div>
          <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
