import * as React from 'react';

function SvgHeart(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="18"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.172 2.172a4 4 0 000 5.656L9 14.657l6.828-6.829a4 4 0 10-5.656-5.656L9 3.343 7.828 2.172a4 4 0 00-5.656 0z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgHeart;
