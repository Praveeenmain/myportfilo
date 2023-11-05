import React from "react";
import "./index.css";
import LeftNavbar from "../leftNavbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
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
            src="https://c.animaapp.com/sew8oDHJ/img/ph-moon.svg"
          />
        </header>
        <div>
          <LeftNavbar />
        </div>

        <div className="about-me-section">
          <div className="overlap-group">
            <div className="about-me-heading">
              <div className="frame">
                <div className="text-wrapper">ABOUT ME</div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://c.animaapp.com/sew8oDHJ/img/line-5.svg"
              />
            </div>
            <div className="about-me-details">
              <p className="hello-there-i-m">
                Hello there! I&#39;m thrilled to welcome you to my portfolio. I
                am a passionate and versatile
                <br />
                full-stack developer with a keen interest in exploring the
                latest cutting-edge technologies.
                <br />
                My journey in the world of web development has been nothing
                short of exhilarating, and <br />I constantly strive to enhance
                my skills and embrace emerging trends in the industry.
              </p>
            </div>
            <div className="about-subheading">
              <div className="text-wrapper-2">What I do!</div>
            </div>
            <div className="web-development">
              <div className="div-2" />
              <div className="web-development-2">
                <div className="web-development-3">
                  <img
                    className="img"
                    alt="Code icon"
                    src="https://c.animaapp.com/sew8oDHJ/img/code-icon.svg"
                  />
                  <div className="text-wrapper-3">Web Development</div>
                </div>
                <p className="p">
                  As a developer, I find myself most <br />
                  captivated by the power and flexibility of <br />
                  NEXT.js. I&#39;m always eager to dive into new
                  <br />
                  projects that leverage NEXT.js and <br />
                  discover innovative ways to create fast, <br />
                  scalable, and user-friendly applications.
                </p>
              </div>
            </div>
            <div className="app-development">
              <img
                className="app-development-card"
                alt="App development card"
                src="https://c.animaapp.com/sew8oDHJ/img/app-development-card.svg"
              />
              <div className="app-details">
                <div className="app-development-2">
                  <img
                    className="img"
                    alt="App"
                    src="https://c.animaapp.com/sew8oDHJ/img/app.svg"
                  />
                  <div className="text-wrapper-4">App Development</div>
                </div>
                <p className="p">
                  With a focus on user-centric design and
                  <br />
                  cutting-edge technologies, I thrive on <br />
                  building intuitive and efficient apps <br />
                  that make a positive impact on people&#39;s <br />
                  lives. Let&#39;s turn ideas into reality and <br />
                  shape the future together.
                </p>
              </div>
            </div>
            <div className="UI-UX-section">
              <div className="UI-UX-design-card" />
              <div className="UI-UX-details">
                <div className="UI-UX-heading">
                  <img
                    className="img"
                    alt="Ux icon"
                    src="https://c.animaapp.com/sew8oDHJ/img/ux-icon.svg"
                  />
                  <div className="text-wrapper-5">UI/UX Designing</div>
                </div>
                <p className="p">
                  Crafting visually appealing and intuitive user
                  <br />
                  interfaces that offer a delightful user <br />
                  experience is something I&#39;m truly fanatic <br />
                  about.
                </p>
              </div>
            </div>
            <div className="mentorship">
              <div className="div-2" />
              <div className="mentorship-details">
                <div className="mentorship-heading">
                  <img
                    className="mentor-icon"
                    alt="Mentor icon"
                    src="https://c.animaapp.com/sew8oDHJ/img/mentor-icon.svg"
                  />
                  <div className="text-wrapper-5">Mentorship</div>
                </div>
                <p className="p">
                  I have also found great joy in sharing my <br />
                  knowledge with others. Being a technical <br />
                  mentor allows me to give back to the <br />
                  community that has supported me <br />
                  throughout my career.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-card" />
          <div className="nav-cards">
            <div className="div-3">
              <div className="rectangle" />
              <Link to="/" className="home">
                {" "}
                {/* Use Link component */}
                <img
                  className="img"
                  alt="Home icon"
                  src="https://c.animaapp.com/sew8oDHJ/img/home-icon.png"
                />
                <div className="text-wrapper-6">Home</div>
              </Link>
            </div>
            <div className="div-3">
              <div className="div-4" />
              <Link to="/resume" className="resume">
                {" "}
                {/* Use Link component */}
                <img
                  className="img"
                  alt="Resume icon"
                  src="https://c.animaapp.com/sew8oDHJ/img/resume-icon.png"
                />
                <div className="text-wrapper-7">Resume</div>
              </Link>
            </div>
            <div className="div-3">
              <div className="div-4" />
              <Link to="/work" className="work">
                {" "}
                {/* Use Link component */}
                <img
                  className="img"
                  alt="Work icon"
                  src="https://c.animaapp.com/sew8oDHJ/img/work-icon.svg"
                />
                <div className="text-wrapper-7">Work</div>
              </Link>
            </div>
            <div className="div-3">
              <div className="div-4" />
              <Link to="/contact" className="contact">
                {" "}
                {/* Use Link component */}
                <img
                  className="img"
                  alt="Contact icon"
                  src="https://c.animaapp.com/sew8oDHJ/img/contact-icon.svg"
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
export default LandingPage;
