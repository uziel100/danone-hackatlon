const path = (root: string, subLink: string): string => `${root}${subLink}`;

const ROOTS_ACCOUNT = '/account';
const ROOTS_DASHBOARD = '/dashboard';

export const PATH_PAGE = {
  start: '/',
  welcome: '/welcome',
  forgotPassword: '/forgot-password',
  changePassword: '/change-password',
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  login: '/login',
  register: '/register',
  help: '/ayuda',
  contact: '/contacto',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500'
};

export const PATH_DASHBOARD: { [key: string]: string } = {
  root: ROOTS_DASHBOARD,
  dashboard: path(ROOTS_DASHBOARD, '/app'),
  user: path(ROOTS_DASHBOARD, '/users'),
  itemCatalog: path(ROOTS_DASHBOARD, '/items'),
  pixelLevel: path(ROOTS_DASHBOARD, '/pixel-level')
};

export const PATH_ACCOUNT = {
  root: ROOTS_ACCOUNT,
  general: path(ROOTS_ACCOUNT, ''),
  profile: path(ROOTS_ACCOUNT, '/me')
};

export const PATH_AFTER_LOGIN: string = PATH_DASHBOARD.dashboard;
