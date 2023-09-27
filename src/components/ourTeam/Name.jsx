import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Name.css";
import githubLogo from "../Images/github-icon.jpg";
import linkedinLogo from "../Images/linkedin-icon.png";
import twitterLogo from "../Images/twitter-icon.png";
import whatsappLogo from "../Images/whatsapp-icon.png";

function Name() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return null; // Handle the case where state is not available
  }

  const {
    name,
    lastname,
    role,
    like,
    image,
    github,
    linkedin,
    twitter,
    whatsapp,
  } = state;

  return (
    <div className="container">
      <div className="profile-container">
        <div className="profile-card">
          <h2>
            {name} {lastname}
          </h2>
          <div className="profile-detail">
            <div className="profile-text">
              <h3>{role}</h3>
              <p>{like}</p>
              <ul>
                <li>
                  <Link to={github}  target="_blank">
                    <img className="logo" src={githubLogo} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={linkedin} target="_blank">
                    <img className="logo" src={linkedinLogo} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to={twitter} target="_blank">
                    <img className="logo" src={twitterLogo} alt="" />
                  </Link>
                </li>

                <li>
                  <Link to={whatsapp} target="_blank">
                    <img className="logo" src={whatsappLogo} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="image-div">
              <img
                className="profile-image"
                src={image}
                alt={`${name}'s Profile`}
              />
              <button className="backBTN" onClick={() => navigate(-1)}>
                &#x21e6;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
