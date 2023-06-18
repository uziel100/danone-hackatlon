import { ReactNode, useState } from 'react';
import { styled } from '@mui/material';
import { HEADER, NavbarHorizontal } from '@/components/common';
import SidebarDrawer from '@/components/common/navbar/SidebarDrawer';

const MainStyle = styled('main')(() => ({
  paddingTop: 16,
  paddingBottom: 16,
  height: '100%',
  marginTop: HEADER.DASHBOARD_DESKTOP_HEIGHT
}));

const LayoutMain = ({ children }: { children: ReactNode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <NavbarHorizontal onToggleDrawer={() => setOpenDrawer(true)} />
      <SidebarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
      <MainStyle>{children}</MainStyle>
    </>
  );
};

export default LayoutMain;
