import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const JoinBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <input
        className="btn btn-medium btn-rounded px-4"
        style={{ backgroundColor: "#2b59b4", color: "white" }}
        type="button"
        value="Join the waitlist"
        onClick={showModal}
      />

      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title className="col-12">
            Join the Waitlist{" "}
            <FaTimes
              onClick={hideModal}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 15,
                top: 20,
              }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <p className="lbl fw-bold">Leave your email address</p>
          <p className="lbl">
            Soon we will grant you an exclusive access to Property Deal Genie
            for 14 days for free
          </p>
          <div className="form-group mb-4">
            <label htmlFor="mail" className="form-label lbl">
              Your email
            </label>
            <input
              type="email"
              placeholder="John.smith@email.com"
              className="form-control"
              id="mail"
            />
          </div>
          <button
            className="btn btn-medium btn-rounded px-4 mb-3"
            style={{ backgroundColor: "#2b59b4", color: "white" }}
          >
            Submit Request
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JoinBtn;
