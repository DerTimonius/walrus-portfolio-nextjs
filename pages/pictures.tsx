import { readdirSync } from 'node:fs';
import Image from 'next/image';

interface Props {
  fileNames: string[];
}
export default function Pictures({ fileNames }: Props) {
  return (
    <>
      <h1>This is a test</h1>
      {fileNames.map((file) => {
        return (
          <Image
            src={`/img/test/${file}`}
            width={300}
            height={400}
            alt="test"
            key={file}
          />
        );
      })}
    </>
  );
}

export function getServerSideProps() {
  const fileNames = readdirSync('./public/img/test');

  return {
    props: {
      fileNames: fileNames,
    },
  };
}
