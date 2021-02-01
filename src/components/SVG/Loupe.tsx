import * as React from 'react';

function SvgLoupe(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 19l-6-6 6 6zM15 8a7.002 7.002 0 01-9.679 6.467A7 7 0 1115 8z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgLoupe;
