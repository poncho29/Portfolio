'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof NextThemesProvider>;

export const ThemeProvider = ({ children, ...props }: Props) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
);
