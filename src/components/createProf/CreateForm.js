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
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [enteredName, setEnteredName] = useState("");
  const [signatureData1, setSignatureData1] = useState("");
  const [signatureData2, setSignatureData2] = useState("");
  const [signatureData3, setSignatureData3] = useState("");
  const [optionID, setOptionID] = useState("");
  const options = [
    { value: "write", label: "Sign Here" },
    { value: "upload", label: "Upload Your Signature" },
  ];
  // const blobCreationFromURL = (inputURI) => {
  //   let binaryVal;

  //   // mime extension extraction
  //   let inputMIME = inputURI.split(",")[0].split(":")[1].split(";")[0];

  //   // Extract remaining part of URL and convert it to binary value
  //   if (inputURI.split(",")[0].indexOf("base64") >= 0)
  //     binaryVal = atob(inputURI.split(",")[1]);
  //   // Decoding of base64 encoded string
  //   else binaryVal = unescape(inputURI.split(",")[1]);

  //   // Computation of new string in which hexadecimal
  //   // escape sequences are replaced by the character
  //   // it represents

  //   // Store the bytes of the string to a typed array
  //   let blobArray = [];
  //   for (let index = 0; index < binaryVal.length; index++) {
  //     blobArray.push(binaryVal.charCodeAt(index));
  //   }

  //   return new Blob([blobArray], {
  //     type: inputMIME,
  //   });
  // };
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
    formData.append("clientName", enteredName);
    formData.append("img1", signatureData1);
    formData.append("img2", signatureData2);
    formData.append("img3", signatureData3);
    //   formData.append('image', {
    //     uri: signatureData.uri,
    //     name: signatureData.uri.split('/').pop(), //split the uri at / and get the last element of the resulting array which actually is the name with the image extention (e.g, abc.jpg)
    //    type: image.type // type needs to be modified. keep reading
    // })
    formData.append("option", optionID);
    formData.append("action", "add-signature");
    props.onAdd(formData);
    // userProfileRef.current.value = "Ahmed";
  };
  const fileChangedHandler = (event) => {
    setSelectedImage1(event.target.files[0]);
    setSelectedImage2(event.target.files[1]);
    setSelectedImage3(event.target.files[2]);
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
    if (selectedImage1 && selectedImage2 && selectedImage3) {
      setSignatureData1(selectedImage1);
      setSignatureData2(selectedImage2);
      setSignatureData3(selectedImage3);
    } else if (trimmedDataUrl) {
      // let blobObject = blobCreationFromURL(trimmedDataUrl);
      // setSignatureData(blobObject);
      setSignatureData1(trimmedDataUrl);
    }
  }, [trimmedDataUrl, selectedImage1,selectedImage2,selectedImage3]);
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
// then inside of our submit handler we can extract user input by storing inside yet another constant that should refer to what we ar extracting
