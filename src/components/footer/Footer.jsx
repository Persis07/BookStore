import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Footer.css";

export default function Footer() {

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedEmails, setSubscribedEmails] = useState([]);

  useEffect(() => {
    // Load subscribed emails from local storage
    const localSubscribedEmails =
      JSON.parse(localStorage.getItem("subscribedEmails")) || [];
    setSubscribedEmails(localSubscribedEmails);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!subscribedEmails.includes(email)) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);

      const updatedSubscribedEmails = [...subscribedEmails, email];
      setSubscribedEmails(updatedSubscribedEmails); //This will push new email in updatedSubscribedEmails.
      localStorage.setItem(
        "subscribedEmails",
        JSON.stringify(updatedSubscribedEmails)
      );
    } else {
      console.log("Email already subscribed:", email);
    }
    setEmail(""); // It clears the email input after subscribing
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer">
      <form className="footer-form" action="">
        <div className="footer-container">
          {subscribed ? (
            <p className="success-message">You have subscribed successfully!</p>
          ) : (
            <div className="footer-container">
              <p className="sign-up-message">
                <strong>Sign up for our newsletter</strong>
              </p>
              <input
                type="email"
                placeholder="Email address"
                className="form-input"
                value={email}
                onChange={handleEmailChange}
              />
              <Button
                buttonText="Subscribe"
                className="subscribeBTN"
                onClick={handleSubscribe}
                disabled={subscribed}
              ></Button>
            </div>
          )}
        </div>
      </form>
      <div className="copyright-text">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link
          to="https://digitalcareerinstitute.org/de/"
          className="copyright-link"
          target="_blank"
        >
          Digital career Institute
        </Link>
      </div>
    </div>
  );
};

    