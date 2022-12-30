import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          a {
            opacity: 0.7;
            transition: all 0.15s linear;
            font-size: 18px;
          }
          .components {
            margin-top: 36px;
          }
          footer {
            display: flex;
            justify-content: space-between;
            flex-direction: row;
          }
        `}
      />
      <Header />
      <Component {...pageProps} className="components" />
      <Footer />
    </div>
  );
}
