import { React, Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../../assets/css/home/navbar.css'


const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar-container'>
        <Link className='hortus-logo' to='/'>
          <img className='logo' src="img/logo.png" alt="Hortus Logo" />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to='/'>Contact us</Link>
          <Link className="nav-link" to='/'>Wishlist</Link>
          <Link className="nav-link" to='/'>Login</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navbar