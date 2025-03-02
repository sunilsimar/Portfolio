import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    HeadstarterAI: {
      jobTitle: "SWE Fellow @",
      duration: "JUL 2024 - PRESENT",
      desc: [
        "Developing 5+ AI apps and APIs using NextJS, OpenAI, Pinecone, and StripeAPI with a target accuracy of 98%, as observed by 1,000 users.",
        "Leading 4+ engineering fellows in projects from design to deployment, utilizing MVC design patterns.",
        "Receiving coaching from engineers at Google, Bloomberg, and Capital One on Agile methodologies, CI/CD practices, Git, and microservice architecture."
      ]
    },
    TrustyMoney: {
      jobTitle: "Full Stack Developer @",
      duration: "MAY 2024 - PRESENT",
      desc: [
       "Refactored the entire frontend codebase, implementing Redux for state management and handling API responses with interceptors, reducing error rates by 40% and improving overall performance.",
       "Developed 20+ reusable components and reduced unnecessary API calls by 50-60%, leading to a 30% decrease in load times.",
      //  "Implemented cookies for JWT token management, enhancing security and reducing unauthorized access incidents by 50%.",
       "Modularized the backend codebase and optimized backend routes, increasing processing efficiency by 35%.",
       "Currently developing a payment gateway, aimed at supporting transactions for 50,000+ users with enhanced security and reliability.",
      ]
    },
    "Pluto.ai": {
      jobTitle: "Full Stack Developer @",
      duration: "MAR 2024 - MAY 2024",
      desc: [
        "Developed a WhatsApp bot using Node.js, automating interactions for over 10,000 users, resulting in a 25% increase in user engagement.",
        "Created a responsive React frontend from scratch, integrating it with APIs and handling up to 1,000 concurrent requests with a 98% uptime.",
        "Built and managed backend routes in Flask, supporting the application’s core functionalities and optimizing performance for 50,000+ transactions daily, improving processing speed by 30%.",
        "Contributed to deploying an advanced AI chat engine on Google Cloud Platform (GCP), leveraging Flask and OpenAI API, processing up to 500,000 queries per day with a 95% accuracy rate.",
          
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
