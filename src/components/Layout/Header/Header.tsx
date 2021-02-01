import '../../../styles/main.scss';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <NavDesktop />
      <NavMobile />
    </header>
  );
};

export default Header;
