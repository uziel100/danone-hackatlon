import React, { ReactElement } from 'react';
import LoginPage from '@/features/Session/pages/LoginPage';
import { LayoutAuth } from '@/components/layouts';

const LoginPageRoot = () => <LoginPage />;

LoginPageRoot.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuth>{page}</LayoutAuth>;
};

export default LoginPageRoot;
