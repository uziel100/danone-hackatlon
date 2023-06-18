import { memo, useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { BpTypography } from '@/components/shared';
import { Avatar, Box, Container, IconButton, List, ListItem, ListItemButton, Tooltip, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSessionContext } from '@/features/Session/context/SessionContext';
import Image from 'next/image';
import { RootAppBarStyle, SessionMenuStyle } from './styles';

interface NavbarHorizontalProps {
  hiddenIconMenu?: boolean;
  onToggleDrawer: () => void;
}

const NavbarHorizontal: FC<NavbarHorizontalProps> = ({ hiddenIconMenu, onToggleDrawer }) => {
  const { user } = useSessionContext();
  const router = useRouter();
  const [isScrollHeader, setIsScrollHeader] = useState<boolean>(false);

  useEffect(() => {
    const onScroll: any = window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setIsScrollHeader(true);
      } else {
        setIsScrollHeader(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <RootAppBarStyle isScroll={isScrollHeader}>
      <Container
        sx={{ display: 'flex', justifyContent: !hiddenIconMenu ? 'space-between' : 'flex-end', alignItems: 'center' }}
        maxWidth={false}
      >
        <IconButton
          sx={{
            display: {
              xs: 'flex',
              md: 'none'
            }
          }}
          onClick={onToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Stack
          direction="row"
          display={{
            xs: 'none',
            md: 'flex'
          }}
          gap={6}
          alignItems="center"
        >
          <Link href="/" title="Ir al inicio">
            <Image
              style={{ cursor: 'pointer' }}
              title="Ir al inicio"
              src="/images/danone-logo.svg"
              alt="Logo de Danone"
              width={120}
              height={54}
            />
          </Link>
          <nav aria-label="Menu de navegación">
            <List sx={{ direction: 'row', display: 'flex', alignItems: 'center', gap: 2 }}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 8,
                    '& a': {
                      color: 'custom.violetBlue',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.2rem'
                    }
                  }}
                >
                  <Link href="/">Inicio</Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 8,
                    '& a': {
                      color: 'custom.violetBlue',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '1.2rem'
                    }
                  }}
                >
                  <Link href="/products">Productos</Link>
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Stack>
        {!user && <Link href="/register">Register</Link>}
        {user && (
          <Tooltip title="Ver perfil" arrow>
            <SessionMenuStyle sx={{ width: 'auto' }} onClick={() => router.push('/profile')}>
              <Box display="flex" gap={1} alignItems="center">
                <Avatar>{user.fullName?.charAt(0)}</Avatar>
                <Stack
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex'
                    }
                  }}
                  flexDirection="column"
                  maxWidth={130}
                >
                  <BpTypography component="p" noWrap variant="body2" fontWeight={500}>
                    {user.fullName}
                  </BpTypography>
                </Stack>
              </Box>
            </SessionMenuStyle>
          </Tooltip>
        )}
      </Container>
    </RootAppBarStyle>
  );
};

export default memo(NavbarHorizontal);
