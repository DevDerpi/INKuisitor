import React, { useState } from "react";
import Form from "../components/Form.js";
import Gauge from "../components/UI/Gauge";
const VerifyPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const verifySignatureHandler = (signData) => {
    fetch("RestApiHere", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(signData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsVerified(true);
  };
  if (isVerified) {
    return <Gauge percentage={0.95}/>;
  }
  return (
    <section>
      <Form onVerify={verifySignatureHandler} />
    </section>
  );
};
export default VerifyPage;
