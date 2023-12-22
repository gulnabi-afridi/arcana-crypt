'use client';

import { ThemeProvider } from 'next-themes';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme='dark' enableSystem={false} attribute='class'>
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
