import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from '../FormFields/InputFields';
import titleImg from '../assets/images/title.jpeg';

export default function CourseTitleForm(props) {
  const {
    formField: {
      courseTitle,
    }
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <img src={titleImg} style={{ marginBottom: 25 }} />
          <Typography color="textSecondary">
            Craft a catchy title and capture your students’ imagination. Make it short, precise, memorable and SEO friendly by including strong keywords in it.
          </Typography>
        </Grid>
        <Grid item xs={8} sm={6}>
          <Typography variant="h6" gutterBottom>
            Write a title for your course
          </Typography>
          <InputField name={courseTitle.name} label={courseTitle.label} fullWidth style={{ 'height': 120 }} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}