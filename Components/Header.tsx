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

  .dropdown-content-digital {
    border: 2px solid white;
    display: none;
    position: absolute;
    background-color: #DB875C;
    min-width: 160px;
    height: min-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
    padding: 18px 24px;
    z-index: 1;
    color: white;
  }

  .dropdown-content-analogue {
    border: 2px solid white; 
    display: none;
    position: absolute;
    background-color: #5CDBD3;
    min-width: 160px;
    height: min-content;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
    padding: 18px 24px;
    z-index: 1;
    color: white;
  }

  .dropdown:hover .dropdown-content-analogue {
    display: flex;
    flex-direction: column;
    gap: 1.0rem;
    justify-content: flex-start;
    text-align: left;
  }

  .dropdown:hover .dropdown-content-digital {
    display: flex;
    flex-direction: column;
    gap: 1.0rem;
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
          Analogue
          <div className="dropdown-content-analogue">
            <Link href="/pictures/various%20Analogue">Various</Link>
            <Link href="/pictures/analogue%20Portrait">Portraits</Link>
            <Link href="/pictures/analogue%20Street">Street</Link>
          </div>
        </div>
        <div className="dropdown">
          Digital
          <div className="dropdown-content-digital">
            <Link href="/pictures/portrait">Portraits</Link>
            <Link href="/pictures/street">Street</Link>
            <Link href="/pictures/landscape">Landscapes</Link>
            <Link href="/pictures/industry">Industry</Link>
            <Link href="/pictures/animal">Animals</Link>
            <Link href="/pictures/macro">Macro</Link>
            <Link href="/pictures/plant">Plants</Link>
          </div>
        </div>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
