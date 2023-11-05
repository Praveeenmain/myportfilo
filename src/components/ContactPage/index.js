import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

import LeftNavbar from "../leftNavbar";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="div">
        <header className="header">
          <div className="logo">
            <img
              className="beatrice-wambui"
              alt="Praveen kumar"
              src="https://res.cloudinary.com/dgviahrbs/image/upload/v1699185499/images_1_gzsdhc.png"
            />
          </div>
          <img
            className="ph-moon"
            alt="Ph moon"
            src="https://c.animaapp.com/3Fmg7Opt/img/ph-moon.svg"
          />
        </header>
        <div>
          <LeftNavbar />
        </div>

        <div className="contact-section">
          <div className="overlap">
            <div className="contact-heading">
              <div className="contact">
                <div className="text-wrapper">Contact</div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/3Fmg7Opt/img/line-5.svg"
              />
            </div>
            <div className="phone-card">
              <div className="overlap-group">
                <img
                  className="phone"
                  alt="Phone"
                  src="https://c.animaapp.com/3Fmg7Opt/img/phone.svg"
                />
                <div className="overlap-2">
                  <p className="p">
                    <span className="span">Phone</span>
                    <span className="text-wrapper-2">: </span>
                  </p>
                  <div className="text-wrapper-3">+254723909353</div>
                  <div className="text-wrapper-4">+254738509151</div>
                </div>
              </div>
            </div>
            <div className="email-card">
              <div className="overlap-3">
                <img
                  className="fluent-emoji-high"
                  alt="Fluent emoji high"
                  src="https://c.animaapp.com/3Fmg7Opt/img/fluent-emoji-high-contrast-e-mail.svg"
                />
                <div className="overlap-group-2">
                  <p className="p">
                    <span className="span">Email</span>
                    <span className="text-wrapper-5">:</span>
                  </p>
                  <div className="text-wrapper-6">
                    beatricewambuimbugua@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <div className="contact-description">
                <p className="i-am-always-open-to">
                  <span className="text-wrapper-7">
                    I am always open to discussing{" "}
                  </span>
                  <span className="text-wrapper-8">new projects</span>
                  <span className="text-wrapper-7">, </span>
                  <span className="text-wrapper-8">
                    opportunities in the tech world,
                    <br />
                    partnerships
                  </span>
                  <span className="text-wrapper-7"> and more so </span>
                  <span className="text-wrapper-8">mentorship</span>
                  <span className="text-wrapper-7">. </span>
                </p>
              </div>
              <div className="email">
                <input className="input" placeholder="Email:" type="email" />
                <img
                  className="img"
                  alt="Line"
                  src="https://c.animaapp.com/3Fmg7Opt/img/line-7.svg"
                />
              </div>
              <div className="message">
                <div className="div-2">Message:</div>
                <img
                  className="img"
                  alt="Line"
                  src="https://c.animaapp.com/3Fmg7Opt/img/line-7.svg"
                />
              </div>
              <div className="name">
                <p className="div-2">
                  <span className="text-wrapper-9">Name</span>
                  <span className="text-wrapper-10">:</span>
                </p>
                <img
                  className="img"
                  alt="Line"
                  src="https://c.animaapp.com/3Fmg7Opt/img/line-6.svg"
                />
              </div>
              <button className="submit-button">
                <div className="text-wrapper-11">Submit</div>
              </button>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-card" />
          <div className="nav-cards">
            <div className="div-3">
              <div className="div-4" />
              <Link to="/">
                <div className="home">
                  <img
                    className="img-2"
                    alt="Home icon"
                    src="https://c.animaapp.com/RQsAoLlz/img/home-icon.svg"
                  />
                  <div className="text-wrapper-12">Home</div>
                </div>
              </Link>
            </div>
            <div className="div-3">
              <div className="rectangle" />
              <Link to="/resume">
                <div className="resume">
                  <img
                    className="img-2"
                    alt="Resume icon"
                    src="https://c.animaapp.com/RQsAoLlz/img/resume-icon.svg"
                  />
                  <div className="text-wrapper-12">Resume</div>
                </div>
              </Link>
            </div>
            <div className="div-3">
              <div className="div-4" />
              <Link to="/work">
                <div className="work">
                  <img
                    className="img-2"
                    alt="Work icon"
                    src="https://c.animaapp.com/RQsAoLlz/img/work-icon.svg"
                  />
                  <div className="text-wrapper-12">Work</div>
                </div>
              </Link>
            </div>
            <div className="div-3">
              <div className="contact-card" />
              <div className="contact-2">
                <img
                  className="img-2"
                  alt="Contact icon"
                  src="https://c.animaapp.com/RQsAoLlz/img/contact-icon.svg"
                />
                <div className="text-wrapper-13">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
