import React from "react";
import { Button, Modal } from "react-bootstrap";

interface JobDisplayModalProps {
  showModal: boolean;
  handleSetShowModal: Function;
  modalJob: IJobObject;
}

export const JobDisplayModal: React.FC<JobDisplayModalProps> = ({
  showModal,
  handleSetShowModal,
  modalJob,
}) => {
  const handleClose = () => handleSetShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalJob["job title"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Description:</h5>
          <p>{modalJob["job description"]}</p>
          <h5>Applicants:</h5>
          <p>{modalJob.applicants}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
