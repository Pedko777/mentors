import * as React from 'react';

function SvgChat(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7H6.01H6ZM10 7H10.01H10ZM14 7H14.01H14ZM7 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V11C19 11.5304 18.7893 12.0391 18.4142 12.4142C18.0391 12.7893 17.5304 13 17 13H12L7 18V13Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgChat;