import React, { useState } from 'react';
import LinearStepper from './LinearStepper';
import { CssBaseline, Container, Paper, Box } from '@material-ui/core';
import Navigationbar from '../Navigationbar/Navigationbar';

const ApplyToMentorpage = () => {
  return (
    <>
      <Navigationbar />
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
};

export default ApplyToMentorpage;
