'use client';

import { GlobalStyles } from '@/styles/global';
import { light } from '@/styles/themes';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
