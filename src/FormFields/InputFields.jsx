import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import { TextField, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
  }

  return !props.isButton ? (
    <TextField
      required
      inputProps={{ style: { fontSize: 30, height: 60 } }}
      error={meta.touched && meta.error && true}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  ) : (
      <Button
        component="label"
        startIcon={<CloudUploadIcon />}
        color="secondary"
      >
        Upload Image
      <input
          type="file"
          hidden
          {...field}
        />
      </Button>
    )
}