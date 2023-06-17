import { FC } from 'react';
import { InputAdornment } from '@mui/material';
import { MobileDatePicker, MobileDatePickerProps } from '@mui/x-date-pickers';
import IconDate from '@mui/icons-material/CalendarToday';
import BpTextFieldWithLabel from './BpTextFieldWithLabel';

interface BpInputMobileDatePickerProps extends Omit<MobileDatePickerProps<Date, Date>, 'renderInput'> {
  value: Date | null;
  helperText?: string;
  id?: string;
  name?: string;
  toolbarTitle?: string;
  error?: boolean;
  onChange: (date: Date | null) => void;
}

const BpInputMobileDatePicker: FC<BpInputMobileDatePickerProps> = ({
  value,
  helperText,
  id,
  name,
  toolbarTitle = 'Selecciona fecha',
  error,
  onChange,
  ...props
}) => (
  <MobileDatePicker
    value={value}
    onChange={onChange}
    toolbarTitle={toolbarTitle}
    {...props}
    renderInput={params => (
      <BpTextFieldWithLabel
        {...params}
        id={id}
        name={name}
        helperText={helperText}
        error={error}
        color="primary"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconDate sx={{ color: theme => theme.palette.grey[500] }} fontSize="small" />
            </InputAdornment>
          )
        }}
        placeholder="DD/MM/YYYY"
      />
    )}
  />
);

export default BpInputMobileDatePicker;
