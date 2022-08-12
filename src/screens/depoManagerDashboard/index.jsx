import React,{useState} from 'react'
import { styles } from './styles'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import NewApplication from './components/newApplication';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


export default function DepoManagerDashboard() {

    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    const mediaQuery = window.matchMedia("(max-width: 650px)");

  return (
    <>
        <Container maxWidth="xl" sx={styles.container}>
        <img
          style={mediaQuery.matches ? styles.imgLogoMobile : styles.imgLogo}
          src={require("../../assets/image/logo.png")}
          alt=""
          srcset=""
        />
        <Typography sx={styles.head}>Bulk Generation System</Typography>
        <Typography sx={styles.dashboardText}>Dashboard</Typography>

        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={styles.tab} label="New application" {...a11yProps(0)} />
          <Tab sx={styles.tab} label="In progress" {...a11yProps(1)} />
          <Tab sx={styles.tab} label="completed" {...a11yProps(2)} />
          <Tab sx={styles.tab} label="Rejected" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <NewApplication/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      In progress
      </TabPanel>
      <TabPanel value={value} index={2}>
      completed
      </TabPanel>
      <TabPanel value={value} index={3}>
      Rejected
      </TabPanel>
    </Box>

        </Container>
    </>
  )
}
