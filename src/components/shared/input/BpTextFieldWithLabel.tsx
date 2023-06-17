import { FC } from 'react';
import { FormControl, FormLabel, TextFieldProps } from '@mui/material';
import BpTextField from './BpTextField';

const BpTextFieldWithLabel: FC<TextFieldProps> = ({ label = 'some label', id, children, ...props }) => (
    <FormControl fullWidth>
      <FormLabel sx={{ color: theme => theme.palette.grey[900] }} htmlFor={id}>
        {label}
      </FormLabel>
      {children || <BpTextField {...props} id={id} label="" margin="dense" />}
    </FormControl>
  );
export default BpTextFieldWithLabel;
