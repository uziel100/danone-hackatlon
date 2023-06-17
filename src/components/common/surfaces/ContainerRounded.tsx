import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

const ContainerRounded: FC<BoxProps> = ({ children, bgcolor, ...props }): JSX.Element => (
  <Box bgcolor={bgcolor} borderRadius="50%" display="flex" alignItems="center" justifyContent="center" {...props}>
    {children}
  </Box>
);
export default ContainerRounded;
