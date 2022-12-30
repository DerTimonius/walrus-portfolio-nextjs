import { useEffect } from 'react';
import PhotoGallery from '../../Components/PhotoGallery.js';
import getPhotoObjectsArray, { Photos } from '../../utils/getPhotoObjects';

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
  const paths = { fullPath: './public/img/test', shortenedPath: '/img/test/' };

  const photos = await getPhotoObjectsArray(paths);
  return {
    props: {
      photos: photos,
    },
  };
}
