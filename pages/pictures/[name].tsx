/* eslint-disable react/no-array-index-key */
import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import BackToTopButton from '../../Components/BackToTopButton';
import PhotoGallery from '../../Components/PhotoGallery';
import { env } from '../../utils/env';
import { Photos } from './index';

function capitalizeString(string: string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

type Props = {
  pageName: string;
  password: string | null;
};

const imageStyles = css`
  p {
    padding-top: 5%;
    padding-left: 25%;
    padding-right: 25%;
    padding-bottom: 10%;
    text-align: justify;
  }
  div {
    padding: 12px;
    margin: 12px;
  }
  h1 {
    margin-top: 24px;
    font-size: 36px;
  }
  img {
    padding: 0.25em;
  }
  i {
    font-size: 12px;
  }
`;

const formStyles = css`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    padding: 4px;
    margin-top: 8px;
    border-radius: 4px;
    color: #000;
    background-color: white;
  }
  input {
    padding: 4px;
    margin: 6px;
    width: 256px;
  }
  .error {
    color: orange;
  }
`;

export default function PictureGallery({ password, ...props }: Props) {
  const [photos, setPhotos] = useState<Photos[] | undefined>(undefined);
  const [errors, setErrors] = useState<{ message: string } | undefined>(
    undefined,
  );
  const [accessGranted, setAccessGranted] = useState(!password);
  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState<{ description: string }[]>(
    [],
  );
  const pageName = props.pageName.split('-');
  const correctPageTitle = pageName.join(' ');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputPassword === password) {
      setAccessGranted(true);
    } else {
      setPasswordError([
        { description: 'Incorrect password, please try again!' },
      ]);
    }
  };

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch('/api/pictures/getPictures', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ folderName: props.pageName }),
      });
      const data = await response.json();
      setPhotos(data.photos);
      setErrors(data.errors);
    }
    fetchPhotos()
      .then()
      .catch((err) => console.log(err));
  }, [props.pageName]);

  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);
  if (errors) {
    return (
      <>
        <Head>
          <meta name="description" content="No pictures found" />
          <title>No pictures found!</title>
        </Head>
        <div css={imageStyles}>
          <h3>{errors.message}</h3>
          <p>
            Hey, it looks like you stumbled into here. No worries,{' '}
            <Link href="/pictures/analogue">here</Link> you can find more
            beautiful pictures.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Display of photographs by Flying Walrus with the theme ${props.pageName}`}
        />
        <title>{capitalizeString(correctPageTitle)} Photography</title>
      </Head>
      {accessGranted ? (
        <div css={imageStyles}>
          {props.pageName ? (
            <h1>
              {pageName.map((string, index) => {
                return (
                  <span key={`string-${index}`}>
                    {capitalizeString(string)}{' '}
                  </span>
                );
              })}
              Photography
            </h1>
          ) : null}
          {photos && <PhotoGallery photos={photos} />}
          <i>
            All images are mine and all rights are reserved. Do not use without
            permission.
          </i>
          <BackToTopButton />
        </div>
      ) : (
        <div
          style={{
            width: '80vw',
            height: '80vh',
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
          }}
          css={formStyles}
        >
          <h4>Enter the correct password to view these images</h4>
          <form onSubmit={handleSubmit}>
            <input
              name="password"
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Super secret password"
            />
            {passwordError.length
              ? passwordError.map((err) => {
                  return (
                    <h6 key={`error-${err.description}`} className="error">
                      {err.description}
                    </h6>
                  );
                })
              : null}
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export function getServerSideProps(context: GetServerSidePropsContext) {
  const pageName = context.query.name;
  // @ts-ignore
  const password: string | undefined = env[pageName];
  return {
    props: {
      pageName,
      password: password ? password : null,
    },
  };
}
