import { Box } from '@mui/material';

const LayoutAuth = ({ children }: { children: JSX.Element }) => (
  <Box
    component="main"
    sx={{
      height: '100vh'
    }}
  >
    {children}
  </Box>
);

export default LayoutAuth;
