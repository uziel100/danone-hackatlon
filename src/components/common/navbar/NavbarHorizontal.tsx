import { memo, useEffect, useState, FC } from 'react';
import { useRouter } from 'next/router';
import { BpTypography } from '@/components/shared';
import { Avatar, Box, Container, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSessionContext } from '@/features/Session/context/SessionContext';
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
        {!hiddenIconMenu && (
          <IconButton onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        <Link href="/products">Products</Link>
        {!user && <Link href="/register">Register</Link>}
        {user && (
          <SessionMenuStyle onClick={() => router.push('/profile')}>
            <Box display="flex" gap={1.5} alignItems="center">
              <Avatar>{user.fullName?.charAt(0)}</Avatar>
              <Stack flexDirection="column" maxWidth={130}>
                <BpTypography component="p" noWrap variant="body2" fontWeight={500}>
                  {user.fullName}
                </BpTypography>
              </Stack>
            </Box>
          </SessionMenuStyle>
        )}
      </Container>
    </RootAppBarStyle>
  );
};

export default memo(NavbarHorizontal);
