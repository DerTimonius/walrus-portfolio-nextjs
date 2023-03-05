import Image from 'next/image';
import { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';

export default function PhotoGallery({ photos }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <div>
      <Gallery
        photos={photos}
        direction="column"
        onClick={openLightbox}
        ref={<Image />}
      />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
              }))}
              // eslint-disable-next-line @typescript-eslint/naming-convention
              components={{ HeaderFullscreen: () => true }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
