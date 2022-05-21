import React from 'react';
// Here we are importing a CSS file as a dependency
import Nav from './Nav';
import './header.css';


function Header() {
    
  
  return (
    <header className="bgc-blueish df jc-sb z-1">
        <div className='header'>
            <h1 className="">Brian Holbrook</h1>
            <Nav />
          </div>
    </header>
  );
}

export default Header;