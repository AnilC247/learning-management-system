import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import CourseTitleForm from '../Forms/CourseTitleForm';
import CourseSlugForm from '../Forms/CourseSlugForm';
import CoursePriceForm from '../Forms/CoursePriceForm';
import CourseDescriptionForm from '../Forms/CourseDescriptionForm';

import SuccessView from './SuccessView';

import addCourseFormModel from '../FormModel/addCourseFormModel';
import formInitialValues from '../FormModel/formInitialValues';

import useStyles from './style';

const steps = ['Title', 'Slug', 'Price', 'Description'];
const { formId, formField } = addCourseFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <CourseTitleForm formField={formField} />;
    case 1:
      return <CourseSlugForm formField={formField} />;
    case 2:
      return <CoursePriceForm formField={formField} />;
    case 3:
      return <CourseDescriptionForm formField={formField} />;
    default:
      return <div>Not Found</div>;
  }
}

export default function AddCourse() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    setFormValues(values);
    await _sleep(6000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Add your course
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <SuccessView formValues={formValues}/>
        ) : (
          <Formik
            initialValues={formInitialValues}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Finish' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}