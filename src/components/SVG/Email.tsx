import * as React from 'react';

function SvgEmail(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width="19" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 11.625h2.748c.281 0 .552.112.75.311l2.566 2.565c.199.2.47.311.75.312h3.371c.282 0 .552-.113.751-.312l2.565-2.565c.2-.199.47-.31.751-.311H18M5.25 2.062H3.125A2.125 2.125 0 001 4.188v12.75a2.125 2.125 0 002.125 2.125h12.75A2.125 2.125 0 0018 16.938V4.188a2.125 2.125 0 00-2.125-2.125H5.25zM9.5 1v8.5V1zm0 8.5l3.188-3.188L9.5 9.5zm0 0L6.312 6.312 9.5 9.5z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgEmail;
