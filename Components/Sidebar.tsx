import { css } from '@emotion/react';
import Link from 'next/link';

const sidebarStyles = css`
  .navbar {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default function Sidebar() {
  return (
    <main css={sidebarStyles}>
      <nav className="navbar">
        <Link href="/pictures/nature">Nature</Link>
        <Link href="/pictures/test">Test</Link>
      </nav>
    </main>
  );
}
