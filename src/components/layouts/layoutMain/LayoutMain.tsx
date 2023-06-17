import { ReactNode } from 'react';

import { styled } from '@mui/material';
import { HEADER, NavbarHorizontal } from '@/components/common';

const MainStyle = styled('main')(() => ({
  paddingTop: 16,
  paddingBottom: 16,
  height: '100%',
  marginTop: HEADER.DASHBOARD_DESKTOP_HEIGHT
}));

const LayoutMain = ({ children }: { children: ReactNode }) => {
  console.log('LayoutMain');
  return (
    <>
      <NavbarHorizontal onToggleDrawer={() => {}} />

      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default LayoutMain;
