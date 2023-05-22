import { css } from '@emotion/react';

const buttonStyles = css`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  padding: 10px;
  cursor: pointer;
  border-radius: 100%;
  background-color: inherit;

  &:hover {
    background-color: #333333;
  }
`;

export default function BackToTopButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button css={buttonStyles} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f3f3f3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
      >
        {/* <path d="M12 4l-8 8h6v8h4v-8h6z" /> */}
        {/* <path d="M12 19V5M5 12l7-7 7 7" /> */}
        {/* <path d="M19 14l-7-7m0 0L5 14m7-7v14" /> */}
        <path d="M19 14l-7-7-7 7" />
      </svg>
    </button>
  );
}
