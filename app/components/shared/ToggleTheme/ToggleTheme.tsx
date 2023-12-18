'use client';
import React from 'react';
import { useTheme } from 'next-themes';

const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className='bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-green dark:text-red px-2 py-1 text-[16px] rounded-lg'
    >
      Toggle Mode
    </button>
  );
};

export default ToggleTheme;
