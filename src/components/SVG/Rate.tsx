import * as React from 'react';

function SvgRate(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 6c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2V6zm0 0c1.11 0 2.08.402 2.599 1L10 6zm0 0V5v1zm0 0v8-8zm0 8v1-1zm0 0c-1.11 0-2.08-.402-2.599-1L10 14zm9-4a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgRate;
