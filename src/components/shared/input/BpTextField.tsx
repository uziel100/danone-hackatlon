import { FC } from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '4px',
      borderColor: theme.palette.grey[500]
    }
  }
}));

const BpTextField: FC<TextFieldProps> = ({
  name,
  variant = 'outlined',
  placeholder = '',
  className = '',
  label = '',
  disabled = false,
  fullWidth = true,
  children,
  value,
  ...props
}) => (
  <StyledTextField
    name={name}
    label={label}
    variant={variant}
    placeholder={placeholder}
    className={`${className}`}
    disabled={disabled}
    fullWidth={fullWidth}
    value={value}
    {...props}
  >
    {children && children}
  </StyledTextField>
);

export default BpTextField;
