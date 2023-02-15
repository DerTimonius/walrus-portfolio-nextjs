import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { NextApiRequest, NextApiResponse } from 'next';

import getPhotoObjectsArray from '../../../utils/getPhotoObjects';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(401).json({ errors: { message: 'Invalid Method' } });
  }
  const folderName = req.body.folderName;
  const dir = resolve('./public', 'img');
  if (typeof folderName !== 'string') {
    return res
      .status(400)
      .json({ errors: { message: 'Invalid datatype for folderName' } });
  }
  const paths = {
    fullPath: join(dir, folderName),
    shortenedPath: `/img/${folderName}/`,
  };
  const directoryExists = existsSync(paths.fullPath);

  if (!directoryExists) {
    return res
      .status(404)
      .json({ errors: { message: 'Directory does not exist' } });
  }
  const photos = await getPhotoObjectsArray(paths);
  if (photos.length === 0) {
    return res
      .status(500)
      .json({ errors: { message: 'Something went wrong' } });
  }
  return res.status(200).json({ photos });
}
