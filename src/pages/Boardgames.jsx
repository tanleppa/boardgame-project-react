import React, { useEffect, useState } from 'react';
import Boardgame from '../components/ui/Boardgame'

const Boardgames = ({ Boardgames: initialBoardgames }) => {
    const [boardgames, setBoardgames] = useState(initialBoardgames)

    useEffect(() => {
        document.querySelector('body').scrollTo(0,0)
    }, [])

    function filterboardgames(event) {
        const filter = event.target.value
        if (filter === "LOW_TO_HIGH") {
            setBoardgames(
                boardgames.slice().sort((a, b) => 
                (a.salePrice || a.originalPrice)
                - (b.salePrice || b.originalPrice))
                )
        } else if (filter === "HIGH_TO_LOW") {
            setBoardgames(
                boardgames.slice().sort((a, b) => 
                (b.salePrice || b.originalPrice)
                - (a.salePrice || a.originalPrice))
                )
        } else if (filter === "RATING") {
            setBoardgames(
                boardgames.slice().sort((a, b) => 
                (b.rating - a.rating)))
        }
    }

    return (
        <div id='boardgames__body'>
            <main id="boardgames__main">
                <section>
                    <div className="boardgames__container">
                        <div className="row">
                            <div className="boardgames__header">
                                <h2 className='section__title boardgames__header--title'>Kaikki Lautapelit</h2>
                                <select id="filter" defaultValue="DEFAULT" onChange={filterboardgames}>
                                    <option value="DEFAULT" disabled>Lajittele</option>
                                    <option value="LOW_TO_HIGH">Hinta, Halvin ensin</option>
                                    <option value="HIGH_TO_LOW">Hinta, Kallein ensin</option>
                                    <option value="RATING">Arvostelut</option>
                                </select>
                            </div>
                            <div className="boardgames">
                                {
                                    boardgames.map(boardgame => <Boardgame boardgame={boardgame} key={boardgame.id}/>)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Boardgames;
