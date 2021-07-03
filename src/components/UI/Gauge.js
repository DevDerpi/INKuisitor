import React from "react";
import GaugeChart from "react-gauge-chart";
import Card from "./Card";
import styles from "./Gauage.module.css";
const Gauge = (props) => {
  const THRESHOLD = 0.7;
  let message = "The Signature is ";
  let percentage = props.percentage;
  if (percentage >= THRESHOLD) {
    message += "Genuine";
  } else {
    message += "Forged";
  }
  return (
    <div className={styles.control}>
      <Card>
        <h2>{message}</h2>
        <GaugeChart
          id="gauge-chart2"
          nrOfLevels={3}
          percent={percentage}
          textColor={"#000000"}
          colors={["#FF0000", "#FFFF00", "#00FF00"]}
        />
      </Card>
    </div>
  );
};
export default Gauge;
