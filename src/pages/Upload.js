import React, { useState } from "react";
import Card from "../components/UI/Card.js";
import CreateForm from "../components/createProf/CreateForm";
import SuccessIndicator from "react-success-indicator";
import Loading from "../components/UI/LoadingSpinner";
import axios from "axios";

const UploadPage = () => {
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addSignatureHandler = (signData) => {
    setIsLoading(true);
    // const profile = {
    //   value: signData.clientName,
    //   label: signData.clientName,
    // };
    // let formdata = new FormData();
    // // formdata.append("image", signData.signatureData);
    // formdata.append("value", signData.clientName);
    // formdata.append("label", signData.clientName);

    for (let pair of signData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post(`Hossam's Backend API Here`, signData, {
        headers: {
          "content-type": "multipart/form-data", 
        },
      })
      .then(
        (res) => {
          console.log(res);
          console.log(res.data);
          setIsLoading(false);
          setIsDone(true);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  if (isLoading) {
    return <Loading />;
  }
  if (isDone) {
    return (
      <Card>
        <p style={{ textAlign: "center", padding: "20px" }}>
          <SuccessIndicator size="150px" color="black" />
        </p>
        <h3 style={{ textAlign: "center", padding: "20px" }}>
          Profile created successfully!
        </h3>
      </Card>
    );
  }
  return (
    <Card>
      <CreateForm onAdd={addSignatureHandler} />
    </Card>
  );
};
export default UploadPage;
