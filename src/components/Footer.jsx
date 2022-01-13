import React from 'react';
import Logo from '../assets/logo.png'
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className='footer__logo--img'/>
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className='footer__link'>Etusivu</Link>
                        <span className='footer__link no-cursor'>Tietoa</span>
                        <Link to="/boardgames" className='footer__link'>Lautapelit</Link>
                        <Link to="/cart" className='footer__link'>Ostoskori</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2022 Bamboo
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
