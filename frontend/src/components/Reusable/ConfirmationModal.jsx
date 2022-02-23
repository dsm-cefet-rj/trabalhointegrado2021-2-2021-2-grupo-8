import { React } from "react";
import { Modal, Button } from "react-bootstrap";

function ConfirmationModal({ show, handleClose, callBack, msg }) {
    
  const handleConfirmacao = () => {
    callBack();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleConfirmacao}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmationModal;
