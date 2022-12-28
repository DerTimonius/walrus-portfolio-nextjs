import { readFileSync } from 'node:fs';
import ExifParser from 'exif-parser';

export default function getPictureDimensions(picture: string) {
  const buffer = readFileSync(picture);
  const parser = ExifParser.create(buffer);
  const exifData = parser.parse();
  const width = exifData.imageSize.width;
  const height = exifData.imageSize.height;
  return { width, height };
}
