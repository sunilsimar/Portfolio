import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Course App": {
        title: "course app",
        desc:
          "Created a comprehensive administrative dashboard with secure authentication and efficient course management.",
        techStack: "NODE.JS, REACT.JS, MONGODB",
        link: "https://github.com/sunilsimar/Course-App",
        open: "",
        image: "/assets/courseapp.png"
      },
      "Infinity Deployer": {
        title: "Infinity Deployer",
        desc:
          "Created an automated website deployment tool, featuring dynamic file serving and real-time build status updates.",
        techStack: "Node.js, Express, React, Redis, and AWS S3",
        link: "https://github.com/sunilsimar/infinity-deployer",
        open: "",
        image: "/assets/infinitydeployer.png"
      },
      Truth: {
        title: "Omegle Clone",
        desc:
          "Created an Omegle clone with real-time video",
        techStack: "TypeScript, React, WebRTC",
        link: "https://github.com/sunilsimar/Omegle-clone",
        open: "",
        image: "/assets/omegle.png"
      },
    };
    const projects = {
      "NodeDEX-Simulation": {
        desc:
          "NodeDex-Sim is a Node.js-based simulation of a decentralized exchange (DEX).",
        techStack: "Node.js (Express.js)",
        link: "https://github.com/sunilsimar/NodeDEX-Sim",
        open: ""
      },
      "Load Balancer": {
        desc:
          "Built a load balancer from scratch using the Robin Hood algorithm to optimize traffic distribution and resource utilization.",
        techStack: "Javascript, Node.js",
        link: "https://github.com/sunilsimar/load-balancer",
        open: ""
      },
      "GraphQL Server": {
        desc:
          "Developed a GraphQL backend with custom endpoints to efficiently handle complex data queries and mutations..",
        techStack: "GraphQL, TypeScript",
        link:
          "https://github.com/sunilsimar/GraphQL-Server"
      },
      "Uniswap Clone": {
        desc:
          "Created and deployed a Uniswap V1 clone using Hardhat, replicating basic decentralized exchange functionalities..",
        techStack: "Solidity, Hardhat",
        link: "https://github.com/sunilsimar/Uniswapv1-Clone",
        open: ""
      },
      "Todo Backend with OpenAI Spec": {
        desc:
          "Developed a Todo backend with OpenAPI specification, utilizing Swagger for comprehensive API documentation and management.",
        techStack: "Node.js, TypeScript, Swagger",
        link: "https://github.com/sunilsimar/todo-backend-with-OpenApi-Spec",
        open: ""
      },
      "Todo CLI": {
        desc:
          "Created a Todo CLI that allows users to add, list,delete and mark tasks as completed.",
        techStack: "Go",
        link: "https://github.com/sunilsimar/todo-cli",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    // openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      // openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
