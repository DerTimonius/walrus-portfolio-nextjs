import Head from 'next/head';
import { css } from '@emotion/react';

import styles from '../styles/Home.module.css';

const indexStyles = css`
  padding-top: 3%;
  p {
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 10%;
    text-align: justify;
  }
  img {
    width: 75%;
    padding-top: 3%;
    padding-bottom: 3%;
    max-width: 3000px;
    pointer-events: none;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="description" content="Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main css={indexStyles}>
        <h1>Welcome, Friend!</h1>
        <img src="/home.jpg" alt="Home"/>
        <p>
        Thanks for stopping by. You have found my little photo page containing some images I shot 
        in the last three to four years or so.
        Please have a look around and maybe by the time you come back I've found 
        a better text than this. In case you have any questions, feel free to reach out.
        </p>
      </main>
    </>
  );
}

/* 
<script>
	(function($){
	  $(document).on('contextmenu', 'img', function() {
		  return false;
	  })
	})(jQuery);
</script>
*/
