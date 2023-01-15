import '../styles/globals.css';

import { css, Global } from '@emotion/react';
import { Sono } from '@next/font/google';
import type { AppProps } from 'next/app';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const sono = Sono({ subsets: ['latin'] });

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
            font-family: ${sono.style.fontFamily}, 'Segoe UI', Tahoma,
              Geneva, Verdana, sans-serif;
            text-align: center;
            color: white;
            background-color: #000000;
          }
          a {
            opacity: 0.85;
            font-size: 18px;
          }
          footer {
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            padding: 12px;
          }
        `}
      />
      <Header />
      <Component {...pageProps} className="components" />
      <Footer />
    </div>
  );
}
