import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Full Stack Developer</b> at
        <a href="https://trustymoney.in/"> TrustyMoney(a Fin-Tech Startup)</a>, At the same time, I am a final-year
        <b> Bachelor of Technology</b> student at{" "}
        <a href="https://iitr.ac.in/Institute/About%20the%20Institute/index.html">Indian Institute of Technology Roorkee (IIT R)</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in Problem Solving. I also play a lot of video games.
      </p>
    );

    const tech_stack = [
      "Typescript",
      "Node.js",
      "React.js",
      "Next.js",
      "Javascript ES6+",
      "C++",
      "Solidity",
      "Rust"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
              <br/>
              <a
                href="https://drive.google.com/file/d/1ICiIP5iZr3__1ncM9DJ6TPCvrof68mWL/view" 
                className="intro-contact"
                target="_blank"
                rel="noopener noreferrer"
              >
               
                {" Resume"}
              </a>
            </div>
            <div className="about-image">
              <img alt="Sunil Simar" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
