import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

type Tprops = {
  children: ReactNode;
  [props: string]: ReactNode;
};

const Layout = ({ children, ...props }: Tprops): JSX.Element => {
  return (
    <main className="main" {...props}>
      {children}
    </main>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
