import React, { ReactElement } from 'react';
import { LayoutMain } from '@/components/layouts';

const AboutPage = () => <h1>AboutPage</h1>;

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain>{page}</LayoutMain>;
};

export default AboutPage;
