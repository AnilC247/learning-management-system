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

// import CheckoutSuccess from './CheckoutSuccess';

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
//   const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
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
          /* <CheckoutSuccess /> */
          <h1>success msg </h1>
        ) : (
          <Formik
            initialValues={formInitialValues}
            // validationSchema={currentValidationSchema}
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
                      {isLastStep ? 'Place order' : 'Next'}
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