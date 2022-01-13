import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Boardgame from '../components/ui/Boardgame';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const Boardgameinfo = ({ Boardgames, addToCart, cart }) => {
    const { id } = useParams()
    const boardgame = Boardgames.find(boardgame => +boardgame.id === +id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [boardgame])

    function addboardgameToCart(boardgame) {
        addToCart(boardgame)
    }

    function boardgameExistsOnCart() {
        const dupe = cart.find(boardgame => +boardgame.id === +id)
        return dupe
    }

    return (
        <div id="boardgames__body">
            <main className="main" id="boardgames__main">
                <div className="boardgames__container">
                    <div className="row">
                        <div className="boardgame__selected--top">
                            <Link to="/boardgames" className="boardgame__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/boardgames" className='boardgame__link'>
                                <h2 className="boardgame__selected--title--top">
                                    Lautapelit
                                </h2>
                            </Link>
                        </div>
                        <div className="boardgame__selected">
                            <figure className="boardgame__selected--figure">
                                <img src={boardgame.url} alt="" className="boardgame__selected--img" />
                            </figure>
                            <div className="boardgame__selected--description">
                                <h2 className="boardgame__selected--title">
                                    {boardgame.title}
                                </h2>
                                <Rating rating={boardgame.rating} />
                                <div className="boardgame__selected--price">
                                    <Price originalPrice={boardgame.originalPrice} salePrice={boardgame.salePrice} />
                                </div>
                                <div className="boardgame__summary">
                                    <h3 className="boardgame__summary--title">
                                        Tietoa pelistä
                                    </h3>
                                    <p className="boardgame__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime animi eaque quo provident, ut nulla laboriosam quaerat tenetur cum, sed ea impedit saepe nemo voluptate similique facilis quia sint.
                                    </p>
                                    <p className="boardgame__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maxime animi eaque quo provident, ut nulla laboriosam quaerat tenetur cum, sed ea impedit saepe nemo voluptate similique facilis quia sint.
                                    </p>
                                </div>
                                {
                                    boardgameExistsOnCart() ? <Link to="/cart" className="boardgame__link"><button className="btn">Siirry ostoskoriin</button></Link>
                                    : <button className="btn" onClick={() => addboardgameToCart(boardgame)}>Lisää koriin</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="boardgames__container">
                    <div className="row">
                        <div className="boardgame__selected--top">
                            <h2 className="boardgame__selected--title--top">
                                Suositellut Lautapelit
                            </h2>
                        </div>
                        <div className="boardgames">
                            {
                                Boardgames
                                    .filter(boardgame => boardgame.rating === 5 && +boardgame.id !== +id)
                                    .slice(0, 4)
                                    .map(boardgame => <Boardgame boardgame={boardgame} key={boardgame.id} />)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Boardgameinfo;
