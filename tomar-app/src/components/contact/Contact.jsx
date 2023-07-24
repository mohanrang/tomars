import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
import { useState } from "react";

const Contact = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d93.615510!3d27.076130!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp";
  const mapWithMarker = `${mapUrl}&markers=${27.07613},${93.61551}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Event handler to update the form data when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the server or perform any necessary actions here
    // For now, let's log the form data to the console
    console.log("Form data:", formData);

    const emailBody = `
    name: ${formData.name},
    email: ${formData.email},
    subject: ${formData.subject},
    message: ${formData.message}
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
    // You can reset the form data after submission if needed
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe
              src={mapWithMarker}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>
                  2cd Floor, Roan Apartment, Chandranagar, Itanagar, 791113.
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>rps34300@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91 9862639179</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flexSB">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Create a message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="primary-btn">
                SEND MESSAGE
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

export default Contact;
