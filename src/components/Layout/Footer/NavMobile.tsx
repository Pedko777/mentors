import SvgBrain from '../../SVG/Brain';
import { NavLink } from 'react-router-dom';
import routes from '../../../pages';

const NavMobile = (): JSX.Element => {
  return (
    <div className="footer__nav footer__nav--mobile">
      <div className="footer__nav-logo">
        <SvgBrain className="footer__nav-logo-img" />
      </div>
      <div>
        <NavLink to={routes.error} className="footer__link">
          All Rights Reserved © 2020
        </NavLink>
      </div>
    </div>
  );
};
export default NavMobile;
