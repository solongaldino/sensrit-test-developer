import { useRef } from "react";
import { useAlertDialogs } from "../../hooks";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function SuccessDialog(): JSX.Element {
  const { success, hideSuccessDialog } = useAlertDialogs();
  const confirmRef = useRef(null);

  return (
    <Modal isOpen={success ? true : false}>
      <ModalHeader>{success?.title ?? "Congratulations!"}</ModalHeader>
      <ModalBody>
        {success?.description ?? "Operation completed successfuly."}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={hideSuccessDialog} ref={confirmRef}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
