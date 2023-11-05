import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import LeftNavbar from "../leftNavbar";

const WorkPage = () => {
  return (
    <div className="work-page">
      <div className="div">
        <header className="header">
          <div className="logo">
            <img
              className="beatrice-wambui"
              alt="Praveen Kumar"
              src="https://res.cloudinary.com/dgviahrbs/image/upload/v1699185499/images_1_gzsdhc.png"
            />
          </div>
          <img
            className="ph-moon"
            alt="Ph moon"
            src="https://c.animaapp.com/yd1w2lBl/img/ph-moon.svg"
          />
        </header>

        <LeftNavbar />

        <div className="work-section">
          <div className="overlap-group">
            <div className="work-heading">
              <div className="frame">
                <div className="work">Portfolio</div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/yd1w2lBl/img/line-5.svg"
              />
            </div>
            <div className="porfolio-cards">
              <div className="UI-UX-card">
                <div className="rectangle" />
                <img
                  className="img"
                  alt="Rectangle"
                  src="https://c.animaapp.com/yd1w2lBl/img/rectangle-20-1@2x.png"
                />
                <div className="text-wrapper">Rental</div>
                <div className="text-wrapper-2">UI/UX</div>
              </div>
              <div className="web-development-card">
                <div className="rectangle-2" />
                <div className="text-wrapper">IdeaFlow</div>
                <div className="text-wrapper-2">Web Development</div>
                <img
                  className="img"
                  alt="Rectangle"
                  src="https://c.animaapp.com/yd1w2lBl/img/rectangle-21@2x.png"
                />
              </div>
              <div className="blog-card">
                <div className="rectangle-3" />
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://c.animaapp.com/yd1w2lBl/img/rectangle-22@2x.png"
                />
                <div className="text-wrapper-3">NEXT.js</div>
                <div className="text-wrapper-4">Blog</div>
              </div>
              <div className="mentorship-card">
                <div className="rectangle-5" />
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://c.animaapp.com/yd1w2lBl/img/rectangle-24@2x.png"
                />
                <div className="text-wrapper-5">Tech Mentor</div>
                <div className="text-wrapper-6">Mentorship</div>
              </div>
              <div className="app-development-card">
                <div className="rectangle-6" />
                <div className="text-wrapper">Smart Bank App</div>
                <div className="text-wrapper-7">App Development</div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/yd1w2lBl/img/rectangle-20@2x.png"
                />
              </div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-8">All</div>
              <div className="text-wrapper-9">App Development</div>
              <div className="text-wrapper-9">Web Development</div>
              <div className="text-wrapper-9">Design</div>
              <div className="text-wrapper-9">Mentorship</div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-card" />
          <div className="nav-cards">
            <div className="div-2">
              <div className="div-3" />
              <Link to="/" className="home">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Home icon"
                  src="https://c.animaapp.com/yd1w2lBl/img/home-icon.svg"
                />
                <div className="text-wrapper-10">Home</div>
              </Link>
            </div>
            <div className="div-2">
              <div className="rectangle-8" />
              <Link to="/resume" className="resume">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Resume icon"
                  src="https://c.animaapp.com/yd1w2lBl/img/resume-icon.svg"
                />
                <div className="text-wrapper-10">Resume</div>
              </Link>
            </div>
            <div className="div-2">
              <div className="work-card" />
              <Link to="/work" className="work-2">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Work icon"
                  src="https://c.animaapp.com/yd1w2lBl/img/work-icon.svg"
                />
                <div className="text-wrapper-11">Work</div>
              </Link>
            </div>
            <div className="div-2">
              <div className="div-3" />
              <Link to="/contact" className="contact">
                {" "}
                {/* Add Link component with 'to' prop */}
                <img
                  className="img-2"
                  alt="Contact icon"
                  src="https://c.animaapp.com/yd1w2lBl/img/contact-icon.svg"
                />
                <div className="text-wrapper-10">Contact</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
