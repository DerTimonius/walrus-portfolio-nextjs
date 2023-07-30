import { css } from '@emotion/react';
import Link from 'next/link';

const footerStyles = css`
  padding-bottom: 2%;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 12px;
    text-align: right;
  }
  span {
    font-weight: 600;
    text-decoration: underline;
  }
  button {
    width: 6em;
  }
  .tooltip {
    position: relative;
    display: inline-block;
    text-decoration: underline;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: white;
    color: #000;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    bottom: 120%;
    width: auto;
    margin-left: -300%;
    position: absolute;
    z-index: 1;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
  .wurst {
    position: relative;
    display: inline-block;
    font-size: 14px;
    text-align: center;
  }

  .wurst a {
    font-size: 14px;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <Link href="/impressum">Impressum</Link>

      <div className="wurst">
      Webpage by <a target="_blank" href="https://github.com/DerTimonius">DerTimonius</a>.
      </div>

      <div>
        <div className="tooltip">
          Contact
          <p className="tooltiptext">mail(at)flyingwalrus(dot)de</p>
        </div>
      </div>
    </footer>
  );
}
