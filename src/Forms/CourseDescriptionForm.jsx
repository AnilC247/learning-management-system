import React from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import InputField from '../FormFields/InputFields';
import InputAdornment from '@material-ui/core/InputAdornment';
import descImg from '../assets/images/desc.jpeg';

export default function CourseDescriptionForm(props) {
    const {
        formField: {
            description,
            img
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img src={descImg} style={{ marginBottom: 25 }} />
                    <Typography color="textSecondary">
                        A great course description is a must for making the sale. Keep it simple but not sloppy, dull or too casual. It’s all about the student so make it personal.
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Give a description for your course
                    </Typography>
                    <InputField
                        name={description.name}
                        label={description.label}
                        fullWidth
                        multiline
                        inputProps={{ style: { fontSize: 20, height: 90 } }}
                    />
                    <Box style={{marginTop: 40}}>
                        <InputField
                            name={img.name}
                            label={img.label}
                            fullWidth
                            type="file"
                            accept="image/*"
                            isButton
                        />
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}