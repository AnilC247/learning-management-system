import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function SuccessView({formValues}) {
  return (
    <React.Fragment>
      <Box align="center">
         <CheckCircleOutlineIcon style={{ color: green[500], fontSize: 120 }} />
      </Box>
      <Typography align="center" variant="h5" gutterBottom>
        Your course <span style={{color:"#207398", fontWeight: "bold"}}>{formValues.courseTitle}</span> added successfully.
      </Typography>
      <Typography align="center" variant="subtitle1">
        Students can access this course now at this url <a href="" style={{color:"#207398"}}>{'chapter247.lms.com/courses/'+formValues.slug}</a>
      </Typography>
    </React.Fragment>
  );
}

export default SuccessView;