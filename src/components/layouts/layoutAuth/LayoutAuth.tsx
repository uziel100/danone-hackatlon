import { Box } from '@mui/material';

const LayoutAuth = ({ children }: { children: JSX.Element }) => (
    <Box
      component="main"
      sx={{
        backgroundImage:
          'url(images/bright-lights.svg), radial-gradient(circle, rgba(20,19,91,1) 0%, rgba(18,19,36,1) 100%)',
        backgroundBlendMode: 'color-dodge',
        height: '100vh'
      }}
    >
      {children}
    </Box>
  );

export default LayoutAuth;
