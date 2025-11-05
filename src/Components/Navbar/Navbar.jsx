import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {
   const [menu, setMenu] = useState("shop");
   const { cartItems } = useContext(ShopContext);

   const totalItems = Object.values(cartItems).reduce((a, b) => a + b, 0);

  return (
    <div className='navbar'>
     <div className="nav-logo">
        <img src={logo} alt="Shopper Logo" />
        <p>SHOPPER</p>
     </div>
     <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link className='nav-link' to='/' style={{ textDecoration: 'none', color: '#626262' }}>Shop</Link>
          {menu === "shop" && <hr/>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link className='nav-link' to='/mens' style={{ textDecoration: 'none', color: '#626262' }}>Men</Link>
          {menu === "mens" && <hr/>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link className='nav-link' to='/womens' style={{ textDecoration: 'none', color: '#626262' }}>Women</Link>
          {menu === "womens" && <hr/>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link className='nav-link' to='/kids' style={{ textDecoration: 'none', color: '#626262' }}>Kids</Link>
          {menu === "kids" && <hr/>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
          {totalItems > 0 && <div className="nav-cart-count">{totalItems}</div>}
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
