/* eslint-disable new-cap */
import { Inter } from 'next/font/google';
import Header from '../_shared/components/header/header';
import './globals.css';
import styles from './page.module.css';
import { HEADER_ID } from '@/_shared/consts/page-tags';
import { Button, ThemeProvider } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';

const inter = Inter({ subsets: ['cyrillic'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider theme="light">
          <div className={styles.container}>
            <section className={styles.header} id={HEADER_ID}>
              <Header />
            </section>
            <section className={styles.router}>{children}</section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
