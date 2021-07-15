import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from '../FormFields/InputFields';
import InputAdornment from '@material-ui/core/InputAdornment';
import slugImg from '../assets/images/slug.jpeg';

export default function CourseSlugForm(props) {
    const {
        formField: {
            slug,
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img src={slugImg} style={{ marginBottom: 25 }} />
                    <Typography color="textSecondary">
                        By giving a friendly URL you make your course more accessible both to people and search engines. Keep it short
                        ,use the keywords of your course title.
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        Give your course a friendly URL (slug)
                    </Typography>
                    <InputField
                        name={slug.name}
                        label={slug.label}
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">chapter247.lms.com/courses/</InputAdornment>,
                        }} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}