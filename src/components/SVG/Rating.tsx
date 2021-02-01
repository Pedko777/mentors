import * as React from 'react';

function SvgRating(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="22"
      height="21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.05 1.927c.3-.921 1.602-.921 1.901 0l1.52 4.674a1 1 0 00.95.69h4.914c.97 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.077 9.101c-.784-.57-.38-1.81.588-1.81H7.58a1 1 0 00.951-.69l1.52-4.674v0z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRating;
