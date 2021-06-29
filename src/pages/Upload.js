import React, { useState } from "react";
import Card from "../components/UI/Card.js";
import CreateForm from "../components/createProf/CreateForm";
import SuccessIndicator from "react-success-indicator";
const UploadPage = () => {
  const [isDone, setIsDone] = useState(false);

  const addSignatureHandler = (signData) => {
    fetch("RestApiHere", {
      mode: "no-cors",
      method: "POST",
      body: JSON.stringify(signData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsDone(true);
  };
  if (isDone) {
    return (
      <div>
        <p>
          <SuccessIndicator size="150px" color="black" />
        </p>
        <h3>Profile created successfully!</h3>
      </div>
    );
  }
  return (
    <Card>
      <CreateForm onAdd={addSignatureHandler} />
    </Card>
  );
};
export default UploadPage;
