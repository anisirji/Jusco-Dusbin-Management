import React, { useState } from "react";
import { styles } from "./styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const steps = [
  "New Application",
  "Site Visited",
  "Rate Proposed",
  "Customer Acknowledgement",
  "B-HOD Approval",
  "Customer NO. Generated",
];

export default function CustomerDashboard() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
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
        <Typography sx={styles.dashboardText}>Application Details</Typography>

        {/* <Box sx={styles.stepper}>
          <Stepper
            activeStep={activeStep}
            orientation={mediaQuery.matches ? "vertical" : "horizontal"}
          >
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
             
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
         */}
        <Paper variant="outlined" sx={styles.fieldContainer}>
          <Box sx={styles.row}>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application No.</Typography>
                <Typography sx={styles.fieldData}>
                  TSUIL/BULK/APPL/2022-23/0073
                </Typography>
              </Box>
            </div>
            <div>
              <Typography sx={styles.dashboardText}></Typography>
              <Box sx={styles.detailsRow}>
                <Typography sx={styles.field}>Application Status</Typography>
                <Typography sx={styles.fieldData}>Pending</Typography>
              </Box>
            </div>
          </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
        <Box sx={styles.row}>
          <div>
            <Typography sx={styles.dashboardText}>Personal Info</Typography>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Name</Typography>
              <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Mobile Number</Typography>
              <Typography sx={styles.fieldData}>9876543210</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Email</Typography>
              <Typography sx={styles.fieldData}>rohitkumar@mail.com</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Designation</Typography>
              <Typography sx={styles.fieldData}>Sr. Manager</Typography>
            </Box>
          </div>
          <div>
            <Typography sx={styles.dashboardText}>Document Details</Typography>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>GSTIN</Typography>
              <Typography sx={styles.fieldData}>20ABCD890J1KZW</Typography>
            </Box>
            <Button variant="contained">view uploaded document</Button>
          </div>
        </Box>
        </Paper>

        <Paper variant="outlined" sx={styles.fieldContainer}>
        <Box sx={styles.row}>
          <div>
            <Typography sx={styles.dashboardText}>Billing Address</Typography>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Establishment Name</Typography>
              <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Street/ House No.</Typography>
              <Typography sx={styles.fieldData}>L-Road, Bistupur</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>City</Typography>
              <Typography sx={styles.fieldData}>Jamshedpur</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Region</Typography>
              <Typography sx={styles.fieldData}>Jharkhand</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Country</Typography>
              <Typography sx={styles.fieldData}>India</Typography>
            </Box>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Postal Code</Typography>
              <Typography sx={styles.fieldData}>831001</Typography>
            </Box>
          </div>

          <div>
            <Typography sx={styles.dashboardText}>
              Garbage Pickup Address
            </Typography>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Establishment Name</Typography>
              <Typography sx={styles.fieldData}>Mr. Rohit Kumar</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Street/ House No.</Typography>
              <Typography sx={styles.fieldData}>L-Road, Bistupur</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>City</Typography>
              <Typography sx={styles.fieldData}>Jamshedpur</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Region</Typography>
              <Typography sx={styles.fieldData}>Jharkhand</Typography>
            </Box>

            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Country</Typography>
              <Typography sx={styles.fieldData}>India</Typography>
            </Box>
            <Box sx={styles.detailsRow}>
              <Typography sx={styles.field}>Postal Code</Typography>
              <Typography sx={styles.fieldData}>831001</Typography>
            </Box>
          </div>
        </Box>
        </Paper>
        <Button variant="contained" onClick={() => window.print()}>Download</Button>
      </Container>
    </>
  );
}
