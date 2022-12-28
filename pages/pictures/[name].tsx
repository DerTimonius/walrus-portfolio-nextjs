import { existsSync } from 'node:fs';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import PhotoGallery from '../../Components/PhotoGallery';
import getPhotoObjectsArray, { Photos } from '../../utils/getPhotoObjects';

type Props =
  | {
      photos: Photos[];
    }
  | {
      error: string;
    };

export default function PictureGallery(props: Props) {
  if ('error' in props) {
    return (
      <>
        <Head>
          <meta name="description" content="No pictures found" />
          <title>No pictures found!</title>
        </Head>
        <div>
          <h3>{props.error}</h3>
          <p>
            Hey, it looks like you stumbled into here. No worries,{' '}
            <Link href="/pictures">here</Link> you can find more beautiful
            pictures.
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>This is a test</h1>
      <PhotoGallery photos={props.photos} />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pageName = context.query.name;
  const paths = {
    fullPath: `./public/img/${pageName}`,
    shortenedPath: `/img/${pageName}/`,
  };
  const directoryExists = existsSync(paths.fullPath);
  if (!directoryExists) {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Sorry, there are no pictures here!',
      },
    };
  }
  const photos = await getPhotoObjectsArray(paths);
  return {
    props: {
      photos: photos,
    },
  };
}
