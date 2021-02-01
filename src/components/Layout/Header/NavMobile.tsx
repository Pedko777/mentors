import React, { useState } from 'react';
import Button from '../../Buttons';
import { NavLink } from 'react-router-dom';
import routes from '../../../pages';

import SvgFrame from '../../SVG/Frame';
import SvgBurger from '../../SVG/Burger';
import SvgBigLogo from '../../SVG/BigLogo';
import Sidebar from './Sidebar';

const NavMobile = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const svg = <SvgFrame />;

  return (
    <nav className="header__nav header__nav--mobile">
      <div className="header__nav-burger" onClick={showSidebar}>
        <SvgBurger className="header__nav-burger-img" />
      </div>
      <Sidebar isOpen={sidebar} onClose={showSidebar} />
      <div className="header__nav-logo">
        <NavLink to={routes.home}>
          <SvgBigLogo className="header__nav-logo-img" />
        </NavLink>
      </div>
      <div className="header__nav-btn">
        <Button type="button" text="" btnStyle="mobile-button" svg={svg} />
      </div>
    </nav>
  );
};
export default NavMobile;
