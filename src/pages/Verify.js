import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "../components/Form.js";
import Gauge from "../components/UI/Gauge";
import Loading from "../components/UI/LoadingSpinner";
const VerifyPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [loadedProfiles, setLoadedProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [gaugePercentage, setGaugePercentage] = useState(0.95);
  //getting the profiles list from he database to put inside select options
  useEffect(() => {
    setIsLoading(true);
    axios
      //Hossam's Backend API To Fetch Profile Names as an array of objects contains value and label pairs
      .get(`https://profiles-744c8-default-rtdb.firebaseio.com/profiles.json`)
      .then(
        (res) => {
          const profiles = [];
          for (const key in res.data) {
            const profile = {
              id: key,
              ...res.data[key],
            };
            profiles.push(profile);
          }
          setIsLoading(false);
          setLoadedProfiles(profiles);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  //********************************************************************** */
  //Sending The post request to server ,contains the user id and the singature image , and taking response put inside the o meter
  const verifySignatureHandler = (verifyData) => {
    setIsLoading(true);
    axios
      .post(
        `Hossam's Backend API Here to send the verify data , then to get response (percentage of similarity)`,
        verifyData
      )
      .then(
        (res) => {
          console.log(res);
          console.log(res.data);
          //Activate this to feed it to the Guage
          setGaugePercentage(res.data);
          setIsLoading(false);
          setIsVerified(true);
        },
        (error) => {
          console.log(error);
        }
      );
      
  };
  //********************************************************************** */
  if (isLoading) {
    return <Loading/>;
  }
  if (isVerified) {
    return <Gauge percentage={gaugePercentage} />;
  }
  return (
    <section>
      <Form onVerify={verifySignatureHandler} profiles={loadedProfiles} />
    </section>
  );
};
export default VerifyPage;
