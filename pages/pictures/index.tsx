import { useEffect } from 'react';

import PhotoGallery from '../../Components/PhotoGallery.js';
import getPhotoObjectsArray from '../../utils/getPhotoObjects';

export type Photos = {
  src: string;
  width: number;
  height: number;
};

type Props = {
  photos: Photos[];
};

export default function Pictures({ photos }: Props) {
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);
  return <PhotoGallery photos={photos} />;
}

export async function getServerSideProps() {
  const paths = {
    fullPath: './public/img/portrait',
    shortenedPath: '/img/portrait/',
  };

  const photos = await getPhotoObjectsArray(paths);
  return {
    props: {
      photos: photos,
    },
  };
}
