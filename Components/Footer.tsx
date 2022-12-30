import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/impressum">Impressum</Link>
      <div>
        <p>Don't be shy!</p> <p>Contact</p>
      </div>
    </footer>
  );
}
