import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fade from 'react-reveal/Fade';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'inherit',
    display: 'flex',
    height: 230,
    position: 'relative',
    color: "#E1A5E3"
  },
  tabs: {
    borderRight: `1px solid #E1A5E3`,
    color: "#E1A5E3"
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Work"
        className={classes.tabs}
      >
        <Tab label="BlackBerry" {...a11yProps(0)} />
        <Tab label="UBC Launchpad" {...a11yProps(1)} />
        <Tab label="UBC" {...a11yProps(2)} />
        <Tab label="BCCHR" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <h4 className="noMargin"><span style={{color:"white"}}> Open Source Software Analyst </span>@ <a href="https://www.blackberry.com/us/en"> BlackBerry </a></h4>
        <p className="noMargin"> January 2020 - May 2020 <br/>
        Incoming intern on the cyber-security and risk analysis team. </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h4 className="noMargin"><span style={{color:"white"}}> Software Developer </span>@ <a href="https://ubclaunchpad.com"> UBC Launchpad </a> </h4>
      <p className="noMargin"> January 2019 - Current <br/>
      Past agile team member on Mimic, a text generating and natural language processing library.
      <br/> Currently working on Census continuous integration and deployment pipeline using TravisCI, AWS and NodeJS on a Serverless backend. </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h4 className="noMargin"> <span style={{color:"white"}}> Research Assistant </span >@ <a href="https://www.ubc.ca"> UBC </a> </h4>
      <p className="noMargin"> May 2019 - November 2019 <br/>
      Designed a Python library that efficiently searches, scrapes and analyzes data for 5000+ keywords using Pandas, BeautifulSoup and Numpy. <br/>
      Designed tests for edge cases. Performed marketing and financial analysis in R.
      </p>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <h4 className="noMargin"> <span style={{color:"white"}}> Directed Studies Researcher </span>@ BC Centre for Health Research </h4>
      <p className="noMargin"> May 2019 - August 2019 <br/>
       <a style={{color:"white"}} href="http://www.cinc.org/2019/Program/accepted/61_CinCFinalPDF.pdf"> Paper: An algorithm for early detection of sepsis using traditional statistical regression modeling. </a> <br/>
      Collaborated with clinicians to combine clinical features and analyze a dataset of 800,000+ Patients with over 40 individual features, generated plots using ggplot2 and built ML models in R. Paper was presented at Computing in Cardiology, 2019.
      </p>
      </TabPanel>
    </div>
  );
}
