import React from 'react';
import Boardgame from './ui/Boardgame';
import { boardgames } from "../data"

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="secction__title">
                        Suosituimmat <span className='purple'>Lautapelit</span>
                    </h2>
                    <div className="boardgames">
                        {boardgames
                            .filter(boardgame => boardgame.rating === 5)
                            .slice(0, 4)
                            .map(boardgame => <Boardgame key={boardgame.id}
                                               boardgame={boardgame} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
