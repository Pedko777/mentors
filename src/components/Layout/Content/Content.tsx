import { ReactNode } from 'react';

type Tprops = {
  children: ReactNode;
  [x: string]: ReactNode;
};

const Content = ({ children, ...props }: Tprops): JSX.Element => {
  return (
    <div className="content">
      <div className="container" {...props}>
        {children}
      </div>
    </div>
  );
};

export default Content;
