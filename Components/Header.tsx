import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  header {
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 12px;
    margin: 24px 0 12px;
    border-bottom: 1px solid black;
  }
  nav {
    display: flex;
    justify-content: space-around;
  }
  a {
    position: relative;
  }
  a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #333;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/pictures/nature">Nature</Link>
        <Link href="/pictures/test">Test</Link>
        <Link href="/pictures/street">Street</Link>
      </nav>
    </header>
  );
}
