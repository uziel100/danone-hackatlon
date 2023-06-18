import React, { ReactElement } from 'react';
import { LayoutMain } from '@/components/layouts';
import { ProfilePage } from '@/features/Session';

const ProfileRootPage = () => <ProfilePage />;

ProfileRootPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default ProfileRootPage;
