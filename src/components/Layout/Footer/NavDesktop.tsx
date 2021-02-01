import { NavLink } from 'react-router-dom';
import routes from '../../../pages';
import SvgBrain from '../../SVG/Brain';

const NavDesktop = (): JSX.Element => {
  return (
    <div className="footer__nav footer__nav--desktop">
      <div className="footer__nav-left-side">
        <div className="footer__nav-logo">
          <NavLink to={routes.home}>
            <SvgBrain className="footer__nav-logo-img" />
          </NavLink>
        </div>
        <ul className="footer__nav-list">
          <li>
            <NavLink to={routes.error} className="link">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.error} className="link">
              About us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="footer__nav-right-side">
        <NavLink to={routes.error} className="footer__link">
          All Rights Reserved © 2020
        </NavLink>
      </div>
    </div>
  );
};

export default NavDesktop;
