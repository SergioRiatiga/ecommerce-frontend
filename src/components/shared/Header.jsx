import { Link, Navigate } from "react-router-dom"
import './styles/header.css'
import CartMenu from '../shared/CartMenu'
import { useState } from 'react'

const Header = () => {

  const [isCloseCart, setIsCloseCart] = useState(true)

  const handleOpenMenu =() => {
    if (isCloseCart && localStorage.getItem('token') ) {
      return setIsCloseCart(false)
    } else if (!isCloseCart && localStorage.getItem('token')) {
      return setIsCloseCart(true)
    } else {
      return window.location = '/#/login'
    }
  }

  return (
    <header className="header__container">
      <h1 className="header__container__logo">
        <Link to='/'>e-commerce</Link>
      </h1>
      <nav className="header__container__nav">
        <ul className="header__container__list">
          <li className="header__container__item">
            <Link to='/login'><i className='bx bx-user'></i></Link>
          </li>
          <li className="header__container__item">
            <Link to='/purchases'><i className='bx bx-box'></i></Link>
          </li>
          <li onClick={handleOpenMenu} className="header__container__item">
            <i className='bx bx-cart'></i>
          </li>
        </ul>
      </nav>
      <div className={`menuShop ${isCloseCart ? 'menuShop__close':''}`}>
        <CartMenu/>
      </div>
    </header>
  )
}


export default Header