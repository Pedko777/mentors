import * as React from 'react';

function SvgArrow(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="16"
      height="9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15 1L8 8 1 1"
        stroke="#9CA3AF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrow;
