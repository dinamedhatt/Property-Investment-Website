import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";

const AlertMsg = (props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant={props.color} style={{ height: "60px" }}>
        <p className="text-center">
          {props.msg}
          <FaTimes
            onClick={() => setShow(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              right: 15,
              top: 20,
            }}
          />
        </p>
      </Alert>
    </>
  );
};

export default AlertMsg;
