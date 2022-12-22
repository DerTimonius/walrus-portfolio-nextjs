import { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import { Photos } from '../pages/pictures';

type Props = {
  photos: Photos[];
};

export default function PhotoGallery({ photos }: Props) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Gallery photos={photos} direction="column" onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
