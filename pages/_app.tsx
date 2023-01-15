import '../styles/globals.css';

import { css, Global } from '@emotion/react';
import { Quicksand } from '@next/font/google';
import type { AppProps } from 'next/app';

import Footer from '../Components/Footer';
import Header from '../Components/Header';

const quicksand = Quicksand({ subsets: ['latin'] });

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
            font-family: ${quicksand.style.fontFamily}, 'Segoe UI', Tahoma,
              Geneva, Verdana, sans-serif;
            text-align: center;
            /*  background-image: linear-gradient(
              to bottom left,
              #60696b,
              #667073,
              #6d777b,
              #747e83,
              #7b858b,
              #7f909a,
              #829ba9,
              #84a7b8,
              #7cbbce,
              #71d1e0,
              #65e6ec,
              #5ffbf1
            ); */
            /*  background-image: linear-gradient(
              to right top,
              #acdfff,
              #c7e3ff,
              #dde8fd,
              #eceef9,
              #f6f6f6
            ); */
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
