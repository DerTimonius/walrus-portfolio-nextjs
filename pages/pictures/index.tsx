import PhotoGallery from '../../Components/PhotoGallery.js';
import getPhotoObjectsArray, { Photos } from '../../utils/getPhotoObjects';

type Props = {
  photos: Photos[];
};

export default function Pictures({ photos }: Props) {
  return (
    <>
      <h1>This is a test</h1>
      <PhotoGallery photos={photos} />
    </>
  );
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
