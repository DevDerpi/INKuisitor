import React from "react";
import { Link } from "react-router-dom";
import styles from "../components/homeNav.module.css";
import Card from "../components/UI/Card";

const HomePage = () => {
  return (
    <Card>
      <div className={styles.actions}>
        <h1>Welcome To INKiusitor, Admin!</h1>
        <div>
          <section>Verify Clients' Signatures With INKuisitor</section>
          <p>
            The Secure offline signature verificaiton application that employees
            and admins trust.
          </p>
          <Link to="/Verify">
            <button>Verify a signature</button>
          </Link>
          <Link to="/Upload">
            <button>Add a new Signature Profile</button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
export default HomePage;
