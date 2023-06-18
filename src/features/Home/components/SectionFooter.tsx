import Image from 'next/image';
import { Box, BottomNavigationAction, Typography } from '@mui/material';
import { Instagram, Facebook, LinkedIn } from '@mui/icons-material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © Danone México {new Date().getFullYear()}. Todos los derechos reservados.
    </Typography>
  );
}

const SectionFooter = () => (
  <Box textAlign="center" sx={{ bgcolor: 'background.paper', py: 10 }} component="footer">
    <Image src="/images/danone-logo.svg" alt="Vercel Logo" width={120} height={36} />
    <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
      Alimenta sonrisas
    </Typography>
    <a href="https://www.instagram.com/danonemx/?hl=es-la" target="_blank" rel="noopener noreferrer">
      <BottomNavigationAction label="Instagram" icon={<Instagram color="primary" />} />
    </a>
    <a href="https://www.facebook.com/DanoneMX/?locale=es_LA" target="_blank" rel="noopener noreferrer">
      <BottomNavigationAction label="Facebook" icon={<Facebook color="primary" />} />
    </a>
    <a href="https://www.linkedin.com/company/danone?originalSubdomain=mx" target="_blank" rel="noopener noreferrer">
      <BottomNavigationAction label="LinkedIn" icon={<LinkedIn color="primary" />} />
    </a>
    <Copyright />
  </Box>
);
export default SectionFooter;
