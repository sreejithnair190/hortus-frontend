import { React, Fragment, useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/user.context'
// import './navbar.css'
import "./navbar.scss";


const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const handleSignOut = () => setCurrentUser(null);
  console.log(currentUser);

  const location = useLocation();
  const currentPath = location.pathname;

  const isSignIn = currentPath === "/auth/sign-in";
  const isSignUp = currentPath === "/auth/sign-up";
  const isHome = currentPath === "/";

  return (
    // <Fragment>
    <header class="header" id="header">
      <nav className="nav container">
        <Link className="nav__logo" to="/">
          <i class="ri-leaf-line nav__logo-icon"></i> Hortus
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link active-link" to="/">
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link active-link" to="/">
                FAQs
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link active-link" to="/">
                Contact Us
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link active-link" to="/">
                Login
              </Link>
            </li>
            {/* {
            currentUser 
            ? (isHome && <span className="nav-link" onClick={handleSignOut}>Sign Out</span>)
            : (isHome && <Link className="nav-link" to='/auth/sign-in'>Sign In</Link>)
          } */}
          </ul>
        </div>
      </nav>
      <Outlet />
    </header>
    // </Fragment>
  );
};

export default Navbar;
