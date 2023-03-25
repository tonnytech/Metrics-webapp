/* eslint-disable */
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { AiFillSetting, AiFillAudio } from 'react-icons/ai';
import NavbarCss from './styles/Navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <div className={NavbarCss.navContainer}>
      <NavLink to='/' className={NavbarCss.navLink} >
        {<IoChevronBack />}
      </NavLink>
      <div className={NavbarCss.navLinkIcons}>
        { <AiFillAudio /> }
        { <AiFillSetting />}
        </div>
    </div>
  )
}

export default Navbar;