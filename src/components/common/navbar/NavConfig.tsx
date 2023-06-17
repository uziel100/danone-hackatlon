import { PATH_DASHBOARD } from '@/const/index';
import { Home, Inbox, Mail } from '@mui/icons-material';

type TypeKey = { [key: string]: number };

export const HEADER: TypeKey = {
  MOBILE_HEIGHT: 64,
  DASHBOARD_DESKTOP_HEIGHT: 70
};

export const NAVBAR: TypeKey = {
  SIDEBAR_WIDTH: 264
};

export interface INavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  count: number;
}

export const NAV_MENU: INavItem[] = [
  {
    title: 'dashboard',
    path: PATH_DASHBOARD.dashboard,
    icon: <Home />,
    count: 0
  },
  {
    title: 'users',
    path: PATH_DASHBOARD.user,
    icon: <Mail />,
    count: 32
  },
  {
    title: 'Item catalog',
    path: PATH_DASHBOARD.itemCatalog,
    icon: <Inbox />,
    count: 0
  }
];
