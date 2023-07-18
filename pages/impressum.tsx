import { css } from '@emotion/react';
import Head from 'next/head';

const imprintStyles = css`
  padding-top: 3%;
  p {
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 10%;
    text-align: justify;
  }
  img {
    width: 20%;
    padding-top: 5%;
    padding-bottom: 5%;
    max-width: 350px;
    pointer-events: none;
  }
  @media only screen and (max-width: 1080px) {
    p {
      padding-left: 10%;
      padding-right: 10%;
      padding-bottom: 10%;
      text-align: justify;
    }
    img {
      width: 30%;
      padding-top: 5%;
      padding-bottom: 5%;
      max-width: 350px;
      pointer-events: none;
    }
  }
`;

export default function Imprint() {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Imprint" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main css={imprintStyles}>
        <h1>Impressum / Imprint</h1>
        <br /><br /><br />
        <p>
        This is a private, non-commercial website. Therefore, no imprint is given. No cookies of any sort are used, no user input is recorded.
        <br /><br />
        Dies ist eine private, nicht-kommerzielle Website. Es wird daher kein Impressum nach § 5 TMG angegeben. Es werden keine Cookies jeglicher Art verwendet, es werden keine Benutzereingaben erfasst.
        <br /><br />
          <i>
            All images are mine and all rights are reserved. Do not use without
            permission.
          </i>
        </p>
      </main>
    </>
  );
}
