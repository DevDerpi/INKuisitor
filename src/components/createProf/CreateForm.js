import React, { useEffect, useRef, useState } from "react";
import styles from "./CreateForm.module.css";
import Card from "../UI/Card";
import SignatureCanvas from "react-signature-canvas";
import Select from "react-select";

const Form = (props) => {
  const clientNameInputRef = useRef();
  const [selectedOption, setSelectedOption] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const sigPadRef = useRef({});
  const [trimmedDataUrl, setTrimmedDataUrl] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [signatureData1, setSignatureData1] = useState("");
  const [signatureData2, setSignatureData2] = useState("");
  const [signatureData3, setSignatureData3] = useState("");
  const [optionID, setOptionID] = useState("");
  const [flag, setFlag] = useState(0);
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
    let formData = new FormData();
    formData.append("clientName", enteredName);
    formData.append("img1", signatureData1);
    formData.append("img2", signatureData2);
    formData.append("img3", signatureData3);
    formData.append("option", optionID);
    props.onAdd(formData);
  };
  const fileChangedHandler = (event) => {
    setSelectedImage1(event.target.files[0]);
    setSelectedImage2(event.target.files[1]);
    setSelectedImage3(event.target.files[2]);
    setOptionID("Image");
    setIsDisabled(true);
  };
  const clear = (event) => {
    event.preventDefault();
    sigPadRef.current.clear();
  };
  const trim = (event) => {
    event.preventDefault();
    setTrimmedDataUrl(
      sigPadRef.current.getTrimmedCanvas().toDataURL("image/png")
    );
    let flagCount = flag;
    setFlag(flagCount + 1);
    setOptionID("Base64");
    sigPadRef.current.clear();
    if (flag === 2) {
      setIsDisabled(true);
    }
  };
  useEffect(() => {
    if (selectedImage1 && selectedImage2 && selectedImage3) {
      setSignatureData1(selectedImage1);
      setSignatureData2(selectedImage2);
      setSignatureData3(selectedImage3);
    } else if (trimmedDataUrl) {
      if (flag === 1) {
        setSignatureData1(trimmedDataUrl);
      } else if (flag === 2) {
        setSignatureData2(trimmedDataUrl);
      } else if (flag === 3) {
        setSignatureData3(trimmedDataUrl);
      }
    }
  }, [trimmedDataUrl, selectedImage1, selectedImage2, selectedImage3, flag]);
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
            {flag === 0 ? (
              <h3>Please sign {3 - flag} more times..</h3>
            ) : (
              <p></p>
            )}
            {flag === 1 ? (
              <h3>Please sign {3 - flag} more times..</h3>
            ) : (
              <p></p>
            )}
            {flag === 2 ? <h3>Please sign {3 - flag} more time..</h3> : <p></p>}
            {flag === 3 ? <h3>Thank You ! </h3> : <p></p>}
            <Card>
              <SignatureCanvas
                ref={sigPadRef}
                penColor="black"
                backgroundColor="white"
                canvasProps={{ className: styles.sigPad }}
              />
              <button
                onClick={clear}
                disabled={isDisabled}
              >
                Clear Pad
              </button>
              <button onClick={trim} disabled={isDisabled}>
                Confirm Signature
              </button>

              <div className={styles.sigImage}>
                {trimmedDataUrl ? (
                  <img
                    className={styles.sigImage}
                    src={trimmedDataUrl}
                    alt=""
                  />
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
