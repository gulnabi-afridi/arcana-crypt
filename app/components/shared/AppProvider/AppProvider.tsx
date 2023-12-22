'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme='dark' enableSystem={false} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
