import React, { useEffect, useRef, useState } from "react";
import styles from "./CreateForm.module.css";
import Card from "../UI/Card";
import SignatureCanvas from "react-signature-canvas";
import Select from "react-select";

const Form = (props) => {
  const clientNameInputRef = useRef();
  const [selectedOption, setSelectedOption] = useState([]);

  const [isDisabled, setIsDisabled] = useState(false);
  // const userProfileRef = useRef();
  const sigPadRef = useRef({});
  const [trimmedDataUrl, setTrimmedDataUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [signatureData, setSignatureData] = useState("");
  const [optionID, setOptionID] = useState("");
  const options = [
    { value: "write", label: "Sign Here" },
    { value: "upload", label: "Upload Your Signature" },
  ];

  const inputChangeHandler = () => {
    setEnteredName(clientNameInputRef.current.value);
  };
  //handling submission
  const submitHandler = (event) => {
    event.preventDefault();
    // const newProfile = {
    //   clientName: enteredName,
    //   signatureData,
    //   optionID,
    // };
    let formData = new FormData();
    formData.append("name", enteredName);
    formData.append("image", signatureData);
    formData.append("option", optionID);
    formData.append("action", "add-signature");
    props.onAdd(formData);
    // userProfileRef.current.value = "Ahmed";
  };
  const fileChangedHandler = (event) => {
    setSelectedImage(event.target.files);
    setOptionID("P");
    setIsDisabled(true);
  };
  const trim = (event) => {
    event.preventDefault();
    setTrimmedDataUrl(
      sigPadRef.current.getTrimmedCanvas().toDataURL("image/png")
    );
    setOptionID("B");
    sigPadRef.current.clear();
    setIsDisabled(true);
  };
  useEffect(() => {
    if (selectedImage) {
      setSignatureData(selectedImage);
    } else if (trimmedDataUrl) {
      setSignatureData(trimmedDataUrl);
    }
  }, [trimmedDataUrl, selectedImage]);
  // console.log(signatureData);
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="cName">Client's Name</label>
          <input
            type="text"
            required
            id="cName"
            ref={clientNameInputRef}
            onChange={inputChangeHandler}
          ></input>

          <label htmlFor="options">Signature Option</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isDisabled={isDisabled}
          />
        </div>
        {selectedOption.value === "write" ? (
          <div className={styles.sigContainer}>
            <Card>
              <SignatureCanvas
                ref={sigPadRef}
                penColor="black"
                backgroundColor="white"
                canvasProps={{ className: styles.sigPad }}
              />
              <button onClick={trim} disabled={isDisabled}>
                Confirm Signature
              </button>
              <div className={styles.sigImage}>
                {trimmedDataUrl ? (
                  <img className={styles.sigImage} src={trimmedDataUrl} alt="" />
                ) : null}
              </div>
            </Card>
          </div>
        ) : selectedOption.value === "upload" ? (
          <input type="file" multiple onChange={fileChangedHandler} />
        ) : (
          <p>Please Choose An Option To Capture Your Signature</p>
        )}

        <div className={styles.actions}>
          <button type="submit" disabled={!isDisabled || enteredName === ""}>
            Add New Signature Profile
          </button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
// then inside of our submit handler we can extract user input by storing inside yet another constant that should refer to what we ar extracting
