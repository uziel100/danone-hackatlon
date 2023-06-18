import { ReactNode } from 'react';

import { styled } from '@mui/material';
import { HEADER, NavbarHorizontal } from '@/components/common';
import { useRouter } from 'next/router';

const MainStyle = styled('main')(() => ({
  paddingTop: 16,
  paddingBottom: 16,
  height: '100%',
  marginTop: HEADER.DASHBOARD_DESKTOP_HEIGHT
}));

const LayoutMain = ({ children }: { children: ReactNode }) => {
  console.log('LayoutMain');
  const router = useRouter();

  return (
    <>
      <NavbarHorizontal onToggleDrawer={() => router.push('/')} />
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default LayoutMain;
