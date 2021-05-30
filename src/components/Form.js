import React, { useRef } from "react";
import styles from "./Form.module.css";
import Card from "./UI/Card";
const Form = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const meetup = {
      id: Math.random().toString(),
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDesc,
    };
    props.onAddNewMeetup(meetup);
    titleInputRef.current.value = "";
    imageInputRef.current.value = "";
    addressInputRef.current.value = "";
    descInputRef.current.value = "";
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label for="clients">Choose a client</label>
          <select name="cars" id="cars">
            <option value="Ahmed">Ahmed</option>
            <option value="Hassan">Hassan</option>
            <option value="Mohamed">Mohamed</option>
            <option value="Hossam">Hossam</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Signature Image </label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>

        
        <div className={styles.actions}>
          <button type="submit">Verify Signature</button>
        </div>
      </form>
    </Card>
  );
};
export default Form;
// then inside of our submit handler we can extract user input by storing inside yet another constant that should refer to what we ar extracting
