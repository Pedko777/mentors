import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <NavDesktop />
      <NavMobile />
    </footer>
  );
};

export default Footer;
