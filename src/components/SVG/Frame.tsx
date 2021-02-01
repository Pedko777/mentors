import * as React from 'react';

function SvgFrame(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="1.8rem"
      height="1.8rem"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 6.25v2-2zm0 2v2-2zm0 0h2-2zm0 0h-2 2zM8.917 4.917a2.667 2.667 0 11-5.334 0 2.667 2.667 0 015.334 0v0zM2.25 13.583a4 4 0 018 0v.667h-8v-.667z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFrame;
