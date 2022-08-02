import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, changeQuantity, removeFromCart }) => {

    const total = () => {
        let totalSum = 0
        for (let i = 0; i < cart.length; ++i) {
            totalSum += ((cart[i].salePrice || cart[i].originalPrice) * cart[i].quantity)
        }
        return totalSum.toFixed(2)
    }

    const subTotal = () => {
        return (total() * 0.9).toFixed(2)
    }

    const tax = () => {
        return (total() * 0.1).toFixed(2)
    }

    return (
        <div id="boardgames__body">
            <main id="boardgames__main">
                <div className="boardgames__container">
                    <div className="row">
                        <div className="boardgame__selected--top">
                            <h2 className="cart__title">
                                Ostoskori
                            </h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__boardgame">Lautapeli</span>
                                <span className="cart__quantity">Määrä</span>
                                <span className="cart__total">Hinta</span>
                            </div>
                            <div className="cart__body">
                                {
                                    cart.map(boardgame => {
                                        return (
                                            <div className="cart__item" key={boardgame.id}>
                                                <div className="cart__boardgame">
                                                    <img src={boardgame.url} alt="" className='cart__boardgame--img'/>
                                                    <div className="cart__boardgame--info">
                                                        <span className="cart__boardgame--title">
                                                            {boardgame.title}
                                                        </span>
                                                        <span className="cart__boardgame--price">
                                                            {
                                                                boardgame.salePrice
                                                                ? boardgame.salePrice.toFixed(2)
                                                                : boardgame.originalPrice.toFixed(2)
                                                            } €
                                                        </span>
                                                        <button className="cart__boardgame--remove"
                                                        onClick={() => removeFromCart(boardgame)}>
                                                            Poista
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="cart__quantity">
                                                    <input
                                                    type="number"
                                                    min={0}
                                                    max={99}
                                                    className='cart__input'
                                                    onChange={(e) => changeQuantity(e.target.value, boardgame)}
                                                    value={boardgame.quantity}/>
                                                </div>
                                                <div className="cart__total">
                                                    {
                                                        boardgame.salePrice
                                                        ? (boardgame.salePrice * boardgame.quantity).toFixed(2) 
                                                        : (boardgame.originalPrice * boardgame.quantity).toFixed(2) 
                                                    } €
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            {cart.length === 0 && <div className="cart__empty">
                                <h2>Ostoskorisi on tyhjä :(</h2>
                                <Link to="/boardgames">
                                    <button className="btn">Selaa pelejä</button>
                                </Link>
                            </div>}
                        </div>
                        {cart.length > 0 && <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Välisumma</span>
                                <span>{subTotal()} €</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Vero</span>
                                <span>{tax()} €</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Yhteensä</span>
                                <span>{total()} €</span>
                            </div>
                            <button className="btn btn__checkout no-cursor">
                                Siirry maksamaan
                            </button>
                        </div>}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
