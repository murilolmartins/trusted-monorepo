import type { ReactNode } from 'react';

import { AlertModal } from '@components-common';

import { Header } from './Header/Header';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <AlertModal />
    </>
  );
};

export { RootLayout };
