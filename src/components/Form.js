import React, { useRef, useState, useEffect } from "react";
import styles from "./Form.module.css";
import Card from "./UI/Card";
import SignatureCanvas from "react-signature-canvas";
import Select from "react-select";

const Form = (props) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedOption, setSelectedOption] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const sigPadRef = useRef({});
  const [trimmedDataUrl, setTrimmedDataUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [signatureData, setSignatureData] = useState("");
  const [optionID, setOptionID] = useState("");
  const fetchedProfiles = props.profiles;
  // const profiles = [
  //   { value: "Atef", label: "Atef" },
  //   { value: "Wazer", label: "Wazer" },
  //   { value: "Hossam", label: "Hossam" },
  //   { value: "Hassan", label: "Hassan" },
  //   { value: "Magdy", label: "Magdy" },
  //   { value: "Mahdi", label: "Mahdi" },
  // ];

  const options = [
    { value: "write", label: "Sign Here" },
    { value: "upload", label: "Upload Your Signature" },
  ];

  //handling submission
  const submitHandler = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("ClientName", selectedProfile.value);
    if (trimmedDataUrl && !selectedImage) {
      formData.append("BverifiedImg", signatureData);
    } else {
      formData.append("verifiedImg", signatureData);
    }
    formData.append("option", optionID);
    props.onVerify(formData);
  };
  const fileChangedHandler = (event) => {
    setSelectedImage(event.target.files[0]);
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
    setOptionID("Base64");
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
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="profiles">Choose a Profile</label>
          <Select
            defaultValue={selectedProfile}
            onChange={setSelectedProfile}
            options={fetchedProfiles}
            className={styles.Select}
          />
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
              <button onClick={clear} disabled={isDisabled}>
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
          <input type="file" onChange={fileChangedHandler} />
        ) : (
          <p>Please Choose An Option To Capture Your Signature</p>
        )}

        <div className={styles.actions}>
          <button
            type="submit"
            disabled={!isDisabled || selectedProfile === null}
          >
            Verify Signature
          </button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
// then inside of our submit handler we can extract user input by storing inside yet another constant that should refer to what we ar extracting
