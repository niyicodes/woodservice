import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <Nav>
     <div className='logo'>
       <Link to='/'>
        <img src='images/logo.png' alt="My logo" />
       </Link>
     </div>
     <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
     <div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/gallery' onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to='/prices4services' onClick={closeMobileMenu}>
              Prices for services
              </Link>
          </li>
          <li>
            <Link to='/aboutUs' onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
     </div>
    </Nav>
  )
}
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  align-items: center;
  .logo{
    img{
      width: 40%
    }
  }

  .nav-menu{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;

    a{
      text-decoration: none;
      color: white;
      font-size: 1.2rem;

      &:hover{
        border-bottom: 3px double whitesmoke;
        background-color: #554d4d;
        padding:.5rem 1rem;
      }
    }
  }

  
`
export default Header;