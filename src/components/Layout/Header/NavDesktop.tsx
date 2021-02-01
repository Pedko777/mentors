import '../../../styles/main.scss';
import Button from '../../Buttons';
import { NavLink } from 'react-router-dom';
import routes from '../../../pages';
import SvgBigLogo from '../../SVG/BigLogo';
import { useSelector } from 'react-redux';
import { getFavoritesLengthSelectors } from '../../../features/favorites/favoritesSelectors';

const NavDesktop = (): JSX.Element => {
  const favorites = useSelector(getFavoritesLengthSelectors);

  return (
    <nav className="header__nav header__nav--desktop">
      <div className="header__nav-logo">
        <NavLink to={routes.home}>
          <SvgBigLogo className="header__nav-logo-img" />
        </NavLink>
      </div>
      <div className="header__nav-bar">
        <ul className="header__nav-bar-list">
          <li className="header__nav-bar-list-item">
            {favorites > 0 && (
              <div className="header__counter">
                <h5 className="header__counter-text">{favorites}</h5>
              </div>
            )}
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
        <div className="header__nav-bar-buttons-box">
          <Button type="button" text="Log in" btnStyle="button__log-in" />
          <div className="header__nav-bar-button-wrapper">
            <Button type="button" text="Sign up" btnStyle="button" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDesktop;
