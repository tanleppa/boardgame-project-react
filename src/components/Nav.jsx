import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const Nav = ({ cart }) => {
    function toggleMenu() {
        document.body.classList.toggle("menu--open")
    }

    function getCartQuantity(cart) {
        let sum = 0
        for (let i = 0; i < cart.length; ++i) {
            sum += cart[i].quantity
        }
        return sum
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/" className='centered'>
                    <img src={Logo} alt="" className='logo'/>
                </Link>
                <ul className="nav__links">
                    <li className='nav__list'>
                        <Link to="/" className="nav__link">
                            Etusivu
                        </Link>
                    </li>
                    <li className='nav__list'>
                        <Link to="/boardgames" className="nav__link">
                            Lautapelit
                        </Link>
                    </li>
                    <button className='btn__menu' onClick={toggleMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className='nav__icon'>
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        {
                            cart.length > 0
                            &&
                            <span className='cart__length'>
                                {getCartQuantity(cart)}
                            </span>
                        }
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close"  onClick={toggleMenu}>
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link to="" className="menu__link"
                            onClick={toggleMenu}>
                                Etusivu
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/boardgames" className="menu__link"
                            onClick={toggleMenu}>
                                Lautapelit
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link to="/cart" className="menu__link"
                            onClick={toggleMenu}>
                                Ostoskori
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
