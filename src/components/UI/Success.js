import React from "react";
import SuccessIndicator from "react-success-indicator";
import Card from "./Card";
const SuccessIndicator = () => {
  return (
    <Card>
        <p >
          <SuccessIndicator size="150px" color="black" />
        </p>
        <h3>Profile created successfully!</h3>
      </Card>
  );
};
export default SuccessIndicator;
