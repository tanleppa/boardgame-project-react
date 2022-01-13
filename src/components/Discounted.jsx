import React from 'react';
import Boardgame from './ui/Boardgame';
import { boardgames } from "../data"

const Discounted = () => {
    return (
        <section id="discounted">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Alennuksessa olevat <span className="purple">Lautapelit</span>
                    </h2>
                    <div className="boardgames">
                        {boardgames
                            .filter(boardgame => !!boardgame.salePrice)
                            .slice(0, 8)
                            .map(boardgame => <Boardgame key={boardgame.id}
                                               boardgame={boardgame} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
