import { React, Fragment } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isSignIn = currentPath === "/auth/sign-in";
  const isSignUp = currentPath === "/auth/sign-up";
  const isHome = currentPath === "/";

  return (
    <Fragment>
      <div className='navbar-container'>
        <Link className='hortus-logo' to='/'>
          <img className='logo' src="img/logo.png" alt="Hortus Logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to='/'>Contact us</Link>
          <Link className="nav-link" to='/'>Wishlist</Link>
          {isHome && <Link className="nav-link" to='/auth/sign-in'>Sign In</Link> }
          {isSignIn && <Link className="nav-link" to='/auth/sign-up'>Sign Up</Link> }
          {isSignUp && <Link className="nav-link" to='/auth/sign-in'>Sign In</Link> }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar;