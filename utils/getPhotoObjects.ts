import { readdirSync } from 'node:fs';
import getPictureDimensions from './getImageDimensions';

export type Photos = {
  src: string;
  width: number;
  height: number;
};

export default async function getPhotoObjectsArray(paths: {
  fullPath: string;
  shortenedPath: string;
}) {
  const fileNames = readdirSync(paths.fullPath);
  const dimensions = await Promise.all(
    fileNames.map((image) => {
      return getPictureDimensions(`${paths.fullPath}/${image}`);
    }),
  );
  return fileNames.map((fileName, index) => {
    return {
      src: paths.shortenedPath + fileName,
      width: dimensions[index].width,
      height: dimensions[index].height,
    };
  }) as Photos[];
}
