import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import LeftNavbar from "../leftNavbar";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="div">
        <header className="header">
          <div className="logo">
            <img
              className="beatrice-wambui"
              alt="PraveenKumar"
              src="https://res.cloudinary.com/dgviahrbs/image/upload/v1699185499/images_1_gzsdhc.png"
            />
          </div>
          <img
            className="ph-moon"
            alt="Ph moon"
            src="https://c.animaapp.com/YCuIwCgl/img/ph-moon.svg"
          />
        </header>
        <div>
          <LeftNavbar />
        </div>

        <div className="resume-section">
          <div className="overlap-group">
            <div className="resume-heading">
              <div className="resume">
                <div className="text-wrapper">Resume</div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/YCuIwCgl/img/line-5.svg"
              />
            </div>
            <div className="education-experience">
              <div className="education-experience-2">
                <div className="div-2">
                  <img
                    className="img"
                    alt="Icon park outline"
                    src="https://c.animaapp.com/YCuIwCgl/img/icon-park-outline-degree-hat.svg"
                  />
                  <div className="text-wrapper-2">Education</div>
                </div>
                <div className="div-2">
                  <img
                    className="img"
                    alt="Humbleicons"
                    src="https://c.animaapp.com/YCuIwCgl/img/humbleicons-briefcase.svg"
                  />
                  <div className="text-wrapper-2">Experience</div>
                </div>
              </div>
              <div className="moringa-card">
                <div className="rectangle" />
                <div className="div-3">
                  <div className="text-wrapper-3">2020-2021</div>
                  <div className="text-wrapper-4">Software Development</div>
                  <div className="text-wrapper-5">Moringa School</div>
                </div>
              </div>
              <div className="masinde-card">
                <div className="rectangle-2" />
                <div className="div-3">
                  <div className="text-wrapper-3">2012-2016</div>
                  <div className="text-wrapper-4">Disaster Management</div>
                  <div className="text-wrapper-5">
                    Masinde Muliro Universiity
                  </div>
                </div>
              </div>
              <div className="technical-mentor">
                <div className="rectangle-2" />
                <div className="div-3">
                  <div className="text-wrapper-3">2022 - Present</div>
                  <div className="text-wrapper-4">Technical Mentor</div>
                  <div className="text-wrapper-5">Moringa School</div>
                </div>
              </div>
              <div className="village-nation">
                <div className="rectangle" />
                <div className="div-3">
                  <div className="text-wrapper-3">2021-2022</div>
                  <div className="text-wrapper-4">Website Development</div>
                  <div className="text-wrapper-5">Village 2 Nation</div>
                </div>
              </div>
            </div>
            <div className="skills-section">
              <div className="work-skills-card" />
              <div className="work-soft-skills">
                <div className="work-skills-heading-wrapper">
                  <div className="work-skills-heading">
                    <div className="text-wrapper-2">Work Skills</div>
                  </div>
                </div>
                <div className="skills">
                  <div className="work-expertise">
                    <div className="text-wrapper-6">NEXT.js</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-6">React.js</div>
                  </div>
                  <div className="work-expertise-2">
                    <div className="text-wrapper-6">HTML 5</div>
                  </div>
                  <div className="work-expertise-3">
                    <div className="text-wrapper-6">Time Management</div>
                  </div>
                  <div className="work-expertise-4">
                    <div className="text-wrapper-6">Mentorship</div>
                  </div>
                  <div className="work-expertise-5">
                    <div className="text-wrapper-6">
                      Impeccable Communication
                    </div>
                  </div>
                  <div className="work-expertise-6">
                    <div className="text-wrapper-6">Flexibility</div>
                  </div>
                  <div className="work-expertise-7">
                    <div className="text-wrapper-6">Research</div>
                  </div>
                  <div className="work-expertise-8">
                    <div className="text-wrapper-6">Writing</div>
                  </div>
                  <div className="work-expertise-9">
                    <div className="text-wrapper-6">CSS 3</div>
                  </div>
                  <div className="work-expertise-10">
                    <div className="text-wrapper-6">JavaScript</div>
                  </div>
                  <div className="work-expertise-11">
                    <div className="text-wrapper-6">Angular</div>
                  </div>
                  <div className="work-expertise-12">
                    <div className="text-wrapper-6">Android</div>
                  </div>
                  <div className="work-expertise-13">
                    <div className="text-wrapper-6">Git</div>
                  </div>
                  <div className="work-expertise-14">
                    <div className="text-wrapper-6">Mongo DB</div>
                  </div>
                  <div className="work-expertise-15">
                    <div className="text-wrapper-6">SQL</div>
                  </div>
                  <div className="work-expertise-16">
                    <div className="text-wrapper-6">Tailwind CSS</div>
                  </div>
                  <div className="work-expertise-17">
                    <div className="text-wrapper-6">Figma</div>
                  </div>
                </div>
                <div className="soft-skills-heading">
                  <div className="text-wrapper-2">Soft Skills</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-card" />
          <div className="nav-cards">
            <div className="div-4">
              <div className="div-5" />
              <Link to="/" className="home">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Home icon"
                  src="https://c.animaapp.com/YCuIwCgl/img/home-icon.svg"
                />
                <div className="text-wrapper-7">Home</div>
              </Link>
            </div>
            <div className="div-4">
              <div className="rectangle-3" />
              <Link to="/resume" className="resume-2">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Resume icon"
                  src="https://c.animaapp.com/YCuIwCgl/img/resume-icon.svg"
                />
                <div className="text-wrapper-8">Resume</div>
              </Link>
            </div>
            <div className="div-4">
              <div className="div-5" />
              <Link to="/work" className="work">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Work icon"
                  src="https://c.animaapp.com/YCuIwCgl/img/work-icon.svg"
                />
                <div className="text-wrapper-7">Work</div>
              </Link>
            </div>
            <div className="div-4">
              <div className="div-5" />
              <Link to="/contact" className="contact">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Contact icon"
                  src="https://c.animaapp.com/YCuIwCgl/img/contact-icon.svg"
                />
                <div className="text-wrapper-7">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumePage;
