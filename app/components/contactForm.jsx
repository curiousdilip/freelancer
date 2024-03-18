"use client";
import React, { useState } from "react";
import styles from "../home.module.scss";
const ContactForm = ({ onFormSubmit }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby8jns-9lujNZSo38ErWcmFf_3Okt1IE5sTyl9HpYGOJDly2GRah7J-Aoy8xSinR1mPuw/exec",
        {
          method: "POST",
          body: new FormData(event.target),
        },
      );

      if (response.ok) {
        setFormSubmitted(true);
        window.alert("Thank You! \n Form submitted successfully!");
        setTimeout(() => {
          setFormSubmitted(false);
        }, 2000);
        // Call the parent component's onFormSubmit function if provided
        if (onFormSubmit) {
          onFormSubmit();
        }
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            required
            maxLength="45"
          />
          <br />{" "}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            required
            maxLength="45"
          />
          <div className={styles.bsub}>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone*"
              maxLength="10"
            />
            <br />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location*"
              maxLength="45"
            />
            <br />
          </div>
          <div className={styles.bsub}>
            <input
              type="number"
              id="budget"
              name="budget"
              placeholder="Budget*"
              required
              maxLength="10"
            />
            <br />{" "}
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject*"
              required
              maxLength="45"
            />
            <br />
          </div>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder="Message*"
            required
            maxLength="100"
          ></textarea>
          <input type="submit" value="Submit" />
          <br />
        </form>
      ) : (
        <p>Thank you for submitting the form!</p>
      )}
    </>
  );
};

export default ContactForm;
