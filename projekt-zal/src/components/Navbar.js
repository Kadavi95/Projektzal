import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Przychodnia VET
      
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='aboutUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              O nas
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/findUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Znajdź nas
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contactUs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Kontakt
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/appointment'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Umów wizytę
            </Link>
          </li>
    
        </ul>
    
      </nav>
    </>
  );
}

export default Navbar;