import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 12px;
  }
  span {
    font-weight: 600;
    text-decoration: underline;
  }
`;
export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/impressum">Impressum</Link>
      <div className="container">
        <p>
          Don't be shy! <span>Contact</span>
        </p>
      </div>
    </footer>
  );
}
