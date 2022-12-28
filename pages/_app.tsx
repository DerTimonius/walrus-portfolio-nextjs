import '../styles/globals.css';
import { css, Global } from '@emotion/react';
import Grid from '@mui/material/Grid';
import type { AppProps } from 'next/app';
import Sidebar from '../Components/Sidebar';

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
            display: grid;
            grid-template-columns: 200px repeat(4, 1 fr);
            grid-template-areas: 'sidebar main main main main';
          }
          nav {
            grid-area: sidebar;
          }
          .component {
            grid-area: main;
          }
          a {
            opacity: 0.7;
            transition: all 0.15s linear;
            font-size: 18px;
          }
          a:hover {
            opacity: 1;
            font-size: 20px;
          }
        `}
      />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          <Component {...pageProps} className="component" />{' '}
        </Grid>
      </Grid>
    </div>
  );
}
