import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Basic information',
    'Contact Information',
    'Personal Information',
    'Payment',
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='firstName'
        render={({ field }) => (
          <TextField
            id='first-name'
            label='First Name'
            variant='outlined'
            placeholder='Enter Your First Name'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />

      <Controller
        control={control}
        name='lastName'
        render={({ field }) => (
          <TextField
            id='last-name'
            label='Last Name'
            variant='outlined'
            placeholder='Enter Your Last Name'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />

      <Controller
        control={control}
        name='emailAddress'
        render={({ field }) => (
          <TextField
            id='email'
            label='E-mail'
            variant='outlined'
            placeholder='Enter Your E-mail Address'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='nickName'
        render={({ field }) => (
          <TextField
            id='nick-name'
            label='User Name'
            variant='outlined'
            placeholder='Enter Your User Name'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name='phoneNumber'
        render={({ field }) => (
          <TextField
            id='phone-number'
            label='Phone Number'
            variant='outlined'
            placeholder='Enter Your Phone Number'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='alternatePhone'
        render={({ field }) => (
          <TextField
            id='alternate-phone'
            label='Alternate Phone'
            variant='outlined'
            placeholder='Enter Your Alternate Phone'
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='address1'
        render={({ field }) => (
          <TextField
            id='address1'
            label='Address '
            variant='outlined'
            placeholder='Enter Your Address '
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='address2'
        render={({ field }) => (
          <TextField
            id='address2'
            label='About Yourself'
            variant='outlined'
            placeholder='Enter Your Message Here'
            multiline
            rows={4}
            fullWidth
            margin='normal'
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='country'
        render={({ field }) => (
          <TextField
            id='country'
            label='Country'
            variant='outlined'
            placeholder='Enter Your Country Name'
            fullWidth
            margin='normal'
            select
            {...field}
          >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Austraia</MenuItem>
            <MenuItem value='AM'>America</MenuItem>
            <MenuItem value='AF'>Afghanistan</MenuItem>
            <MenuItem value='BH'>Bahrain</MenuItem>
            <MenuItem value='BN'>Benin</MenuItem>
            <MenuItem value='CH'>China</MenuItem>
            <MenuItem value='DN'>Denmark </MenuItem>
            <MenuItem value='ES'>Estonia</MenuItem>
            <MenuItem value='FC'>France</MenuItem>
            <MenuItem value='GC'>Greece</MenuItem>
            <MenuItem value='JP'>Japan </MenuItem>
          </TextField>
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name='cardNumber'
        render={({ field }) => (
          <TextField
            id='cardNumber'
            label='Card Number'
            variant='outlined'
            placeholder='Enter Your Card Number'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />
      <Controller
        control={control}
        name='cardMonth'
        render={({ field }) => (
          <TextField
            id='cardMonth'
            label='Card Month'
            variant='outlined'
            placeholder='Enter Your Card Month'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />
      <Controller
        control={control}
        name='cardYear'
        render={({ field }) => (
          <TextField
            id='cardYear'
            label='Card Year'
            variant='outlined'
            placeholder='Enter Your Card Year'
            fullWidth
            margin='normal'
            {...field}
            required
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    default:
      return 'unknown step';
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      nickName: '',
      emailAddress: '',
      phoneNumber: '',
      alternatePhone: '',
      address1: '',
      address2: '',
      country: '',
      cardNumber: '',
      cardMonth: '',
      cardYear: '',
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant='caption'
                align='center'
                style={{ display: 'block' }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant='h3' align='center'>
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant='contained'
                  color='primary'
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                // onClick={handleNext}
                type='submit'
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
