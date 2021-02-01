import * as React from 'react';

function SvgStar(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 0l1.572 4.837h5.085l-4.114 2.99 1.572 4.836L7 9.673l-4.114 2.99 1.571-4.837-4.114-2.99h5.085L7 0z" />
    </svg>
  );
}

export default SvgStar;
