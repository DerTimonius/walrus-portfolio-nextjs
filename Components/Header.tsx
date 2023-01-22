import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  header {
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding: 12px;
    margin: 24px 0 12px;
    align-items: center;
  }
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 24px 12px;
    padding: 6px;
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
  img {
    height: 5rem;
  }
  nav img {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    height: min-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 18px 24px;
    z-index: 1;
    color: black;
  }

  .dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: flex-start;
    text-align: left;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <nav>
        <Link href="/">
          <img src="/walrus_logo.png" alt="Home" />
        </Link>
        <div className="dropdown">
          <Link href="/">Photography</Link>
          <div className="dropdown-content">
            <Link href="/pictures/analogue">Analogue</Link>
            <Link href="/pictures/portrait">Portrait</Link>
            <Link href="/pictures/street">Street</Link>
            <Link href="/pictures/landscape">Landscape</Link>
            <Link href="/pictures/animals">Animals</Link>
            <Link href="/pictures/macro">Macro</Link>
            <Link href="/pictures/plants">Plants</Link>
          </div>
        </div>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
