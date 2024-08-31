'use client';
/* eslint-disable new-cap */
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Inter } from 'next/font/google';
import Header from '../_components/_header/header';
import './globals.css';
import styles from './page.module.css';
import { HEADER_ID } from '@/_shared/consts/page-tags';

const inter = Inter({ subsets: ['cyrillic'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Theme preset={presetGpnDefault} className={styles.theme}>
          <div className={styles.container}>
            <section className={styles.header} id={HEADER_ID}>
              <Header />
            </section>
            <section className={styles.router}>{children}</section>
          </div>
        </Theme>
      </body>
    </html>
  );
}
