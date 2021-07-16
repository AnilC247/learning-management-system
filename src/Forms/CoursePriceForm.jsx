import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import InputField from '../FormFields/InputFields';
import InputAdornment from '@material-ui/core/InputAdornment';
import priceImg from '../assets/images/price.jpeg';

export default function CoursePriceForm(props) {
    const {
        formField: {
            price,
        }
    } = props;
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <img src={priceImg} style={{ marginBottom: 25 }} />
                    <Typography color="textSecondary">
                        A good discount always puts some extra pressure on a potential customer. However you don’t want to overdo it and undervalue your product.
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={6}>
                    <Typography variant="h6" gutterBottom>
                         Give a price to your course
                    </Typography>
                    <InputField
                        name={price.name}
                        label={price.label}
                        type="number"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}