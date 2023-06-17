import { memo, useEffect, useState, FC } from 'react';
import { BpTypography } from '@/components/shared';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Box, Container, IconButton, Skeleton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RootAppBarStyle, SessionMenuStyle } from './styles';

interface NavbarHorizontalProps {
  hiddenIconMenu?: boolean;
  onToggleDrawer: () => void;
}

const NavbarHorizontal: FC<NavbarHorizontalProps> = ({ hiddenIconMenu, onToggleDrawer }) => {
  const { status, session } = { status: 'autenticated', session: { user: { fullName: 'Juan Perez' } } };
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
        <SessionMenuStyle disabled={status === 'loading'}>
          <Box display="flex" gap={1.5} alignItems="center">
            {status === 'loading' ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : (
              <Avatar>{session?.user.fullName?.charAt(0)}</Avatar>
            )}
            <Stack flexDirection="column" maxWidth={110}>
              {status === 'loading' ? (
                <Skeleton width={110} />
              ) : (
                <BpTypography component="p" noWrap variant="body2" fontWeight={700}>
                  {session?.user.fullName}
                </BpTypography>
              )}
            </Stack>
          </Box>
          <ArrowDropDownIcon htmlColor="#969AAC" />
        </SessionMenuStyle>
      </Container>
    </RootAppBarStyle>
  );
};

export default memo(NavbarHorizontal);
