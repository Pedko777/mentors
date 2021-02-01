import * as React from 'react';

function SvgBurger(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 1.5h32m-32 10h32m-32 10h32" />
    </svg>
  );
}

export default SvgBurger;
