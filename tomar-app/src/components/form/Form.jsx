import React, { useState } from "react";
import Back from "../common/back/Back";
import "./form.css";
import axios from "axios";

const Form = () => {
  // State variables to store the input values
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      mobileNumber,
      age,
      address,
      course,
      additionalInfo,
    };

    // axios
    //   .post("http://localhost:3001/back/form", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error sending data to backend:", error);
    //   });
    const emailBody = `
  name: ${firstName} ${lastName},
  email: ${email},
  mobileNumber: ${mobileNumber},
  age: ${age},
  address: ${address},
  course: ${course},
  additionalInfo: ${additionalInfo}
`;

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mohanrock13146c220@gmail.com",
      Password: "F385C4093D83F13E8A82C7EBB37AD1E537EF",
      To: "mohanrock13146c220@gmail.com",
      From: "mohanrangajagarapu@gmail.com",
      Subject: "Tomar's Admission Form",
      Body: emailBody,
    }).then((message) => alert(message));
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="right row">
            <h1>Tomar's Admission Form</h1>
            <p>Invite You To Join For True Study</p>

            <br />
            <br />

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="flexSB">
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <input
                type="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
              <textarea
                cols="25"
                rows="10"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              >
                Write additional information here...
              </textarea>
              <button type="submit" className="primary-btn">
                SUBMIT
              </button>
            </form>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
