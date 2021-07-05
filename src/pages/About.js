import React from "react";
import Card from "../components/UI/Card";
const HomePage = () => {
  return (
    <Card>
      <p
        style={{
          textIndent: "20px",
          letterSpacing: "2px",
          lineHeight: "1",
          padding: "60px",
          fontSize: "19px",
        }}
      >
        Authentication and verification are considered to be important features
        that every company or basically every establishment that has a database
        of clients and employees must have to deny any sort of forgery, scam and
        fraud that may result in very bad effects on the clients and the
        company. <br></br>Authentication has many various types such as:
        accepting proof of identity like an ID card to complete a purchasing
        process, depositing or withdrawing money as in bank systems, examining
        an object for a creator’s or an author’s signature to verify its
        ownership and asking the person questions that only him or her knows
        which they previously had provided.<br></br> With today technological
        improvements, many sorts of scamming and manipulating have risen
        which’ve made the need for authentication and security measurements
        highly demanded to protect the integrity of the establishment and their
        clients or staff’s data, as data have become the most valuable thing in
        our worlds time. <br></br>The main reason why we choose signature as a
        verification and authentication method in our project is that it is one
        of the most efficient ways to authenticate intent and identity. A
        question one might ask, why signatures? how come a very old method of
        authentication that has been used over centuries be efficient? Well, one
        simple answer for is that it doesn’t require that many tools or
        equipment all you need is INK and a paper or as in nowadays technology a
        smart touch screen and an electronic pen. <br></br> Another reasons of how it is
        efficient is that there are infinite number of possibilities of how a
        person signature style could be, which makes it very easy to verify that
        this is the person signature and extremely hard almost impossible for a
        scammer to copy that person signature if they have not seen it before.
        The main goal is to develop a system that authenticate and verifies a
        person signature and intent by accepting images of his signature and the
        signature that is desired to verify and provide a satisfying result
        showing whether the signature is forged is genuine with a friendly-easy
        to use web application.
      </p>
    </Card>
  );
};
export default HomePage;
