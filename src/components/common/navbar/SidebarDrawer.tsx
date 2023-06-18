import { FC } from 'react';
import { Drawer, List, ListItemButton, ListSubheader, ListItemText, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface Props {
  open: boolean;
  onClose: () => void;
}
const SidebarDrawer: FC<Props> = ({ open, onClose }) => {
  const router = useRouter();

  const handleClick = (href = '/') => {
    router.push(href).then(() => onClose());
  };

  return (
    <Drawer
      sx={{
        zIndex: 9999
      }}
      PaperProps={{
        sx: {
          width: 280
        }
      }}
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <Box height={100} bgcolor="primary.50" width="100%" textAlign="center">
        <Image src="/images/danone02.svg" alt="Logo de Danone" width={200} height={85} />
      </Box>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          '& .MuiTypography-root': {
            color: theme => theme.palette.primary.main,
            fontWeight: 'bold'
          }
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={() => handleClick('/')}>
          <ListItemText primary="Inicio" />
        </ListItemButton>
        <ListItemButton onClick={() => handleClick('/products')}>
          <ListItemText primary="Productos" />
        </ListItemButton>
      </List>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          '& .MuiTypography-root': {
            color: theme => theme.palette.primary.main,
            fontWeight: 'bold'
          }
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Cuenta
          </ListSubheader>
        }
      >
        <ListItemButton onClick={() => handleClick('/profile')}>
          <ListItemText primary="Ir al perfil" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;
