import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import {FaCheckCircle} from '@react-icons/all-files/fa/FaCheckCircle';

const JoinBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  

  const submitFunc = ()=>{
    document.querySelector('#prevBody').style.display='none';
    document.querySelector('#submitBody').style.display='block';
    document.querySelector('#prevTitle').style.display='none';
    document.querySelector('#subTitle').style.display='block';
  }

  return (
    <div>

      {/* THE JOIN WAITLIST BTN */}
      <input
        className="btn btn-medium btn-rounded px-4"
        style={{ backgroundColor: "#2b59b4", color: "white" }}
        type="button"
        value="Join the waitlist"
        onClick={showModal}
      />


      {/* MODAL MANIPULATION */}
      <Modal show={isOpen} onHide={hideModal}>
          {/* First Header (before submission) */}
        <Modal.Header id='prevTitle'>
          <Modal.Title className="col-12" >
            Join the Waitlist
            <FaTimes
              onClick={hideModal}
              style={{
                cursor: "pointer",
                position: "absolute",
                right: 15,
                top: 20,
              }}
            />
          </Modal.Title></Modal.Header>

          {/* Other Header (after submission) */}
          <Modal.Header  id='subTitle' style={{display:'none'}}>
          <Modal.Title className="col-12">
            Request Sent!
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

          {/* First body (before submission) */}
        <Modal.Body className="px-4" id='prevBody'>
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
            onClick={submitFunc}
          >
            Submit Request
          </button>
        </Modal.Body>

          {/* Other body (after submission) */}
        <Modal.Body  id='submitBody' className='px-4' style={{display:'none'}}>
        <p className='fw-bold lbl'><FaCheckCircle style={{color:"#7fce06"}}/>  Great you are on the waitlist now!</p>
        <p className='lbl'>Wait for our invitation to the platform. Depending on a queue it can happen within hours or a few days later at most</p>
        <button className="btn btn-medium btn-rounded px-4 mb-3"
            style={{ backgroundColor: "#2b59b4", color: "white" }} onClick={hideModal}>Close</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default JoinBtn;
