import { useState, FC } from 'react';
import { BpTextField } from '@/components/shared/input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, TextFieldProps } from '@mui/material';

const InputPassword: FC<TextFieldProps> = props => {
  const [hidden, setHidden] = useState<boolean>(true);

  return (
    <BpTextField
      {...props}
      type={hidden ? 'password' : 'text'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={() => setHidden(val => !val)}>
            {hidden ? (
              <VisibilityOff sx={{ color: theme => theme.palette.grey[500] }} />
            ) : (
              <Visibility sx={{ color: theme => theme.palette.grey[500] }} />
            )}
          </IconButton>
        )
      }}
    />
  );
};
export default InputPassword;
