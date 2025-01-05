/* eslint-disable new-cap */
import Header from '@/_shared/components/header/header';
import { HEADER_ID } from '@/_shared/consts/page-tags';
import { ThemeProvider } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';

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
