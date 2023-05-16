import { useRef } from "react";
import { useAlertDialogs } from "../../hooks";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function ErrorDialog(): JSX.Element {
  const { error, hideErrorDialog } = useAlertDialogs();
  const confirmRef = useRef(null);

  return (
    <Modal isOpen={error ? true : false}>
      <ModalHeader>{error?.title ?? "Congratulations!"}</ModalHeader>
      <ModalBody>
        {error?.description ?? "Operation completed successfuly."}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={hideErrorDialog} ref={confirmRef}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
