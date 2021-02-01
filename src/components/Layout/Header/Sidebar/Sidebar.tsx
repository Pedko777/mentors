import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SvgBigLogo from '../../../SVG/BigLogo';
import routes from '../../../../pages';
import Button from '../../../Buttons';

interface IProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<IProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add('stop-scrolling');
    }
    return function cleanup() {
      document.body.classList.remove('stop-scrolling');
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="sidebar">
      <div className="sidebar__left-side">
        <div>
          <NavLink to={routes.home}>
            <SvgBigLogo className="header__nav-logo-img" />
          </NavLink>
        </div>
        <ul className="sidebar__left-side-links">
          <li>
            <NavLink to={routes.favorites} className="link">
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.search} className="link">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.error} className="link">
              About us
            </NavLink>
          </li>
        </ul>
        <div className="sidebar__left-side-btn-wrapper">
          <Button type="button" text="Log in" btnStyle="button__log-in " />

          <Button type="button" text="Sign up" btnStyle="button" />
        </div>
      </div>
      <div className="sidebar__right-side" onClick={onClose}></div>
    </div>
  ) : null;
};

export default Sidebar;
