import React from "react";
import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="Who's Behind the Magic?" />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              I'm Shivam Burnwal, a full-stack developer passionate about movies
              and technology. Your Movie Wonderland is my brainchild, designed
              to celebrate the magic of cinema with a user-friendly platform.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
              Curious to know more about me? Feel free to connect with me on{" "}
              <a
                href="https://linkedin.com/in/shivamburnwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or check out my{" "}
              <a
                href="https://github.com/shivamburnwal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              profile.
            </p>
            <h3
              style={{
                fontSize: "1.5rem",
                fontFamily: "cursive",
                color: "#3f51b5",
              }}
            >
              Technologies Used
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Frontend</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="capsule">React</div>
                        <div className="capsule">JavaScript (ES6+)</div>
                        <div className="capsule">HTML5</div>
                      </div>
                      <div className="col-md-6">
                        <div className="capsule">CSS3</div>
                        <div className="capsule">React Router</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Backend</h5>
                    <div className="capsule">.Net Web API</div>
                    <div className="capsule">SQL Server</div>
                    <div className="capsule">RESTful APIs</div>
                  </div>
                </div>
              </div>
            </div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontFamily: "cursive",
                color: "#3f51b5",
              }}
            >
              APIs
            </h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">External</h5>
                    <div className="capsule">TMDB API</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Internal</h5>
                    <div className="capsule">Movie Data Management API</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
