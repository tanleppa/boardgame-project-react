import React from 'react';
import UndrawBoardgames from '../assets/Undraw_Boardgames.svg'
import bamboos from '../assets/bamboos.png'

const Landing = () => {
    return (
        <section id='landing'>
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Suomen palkituin lautapelikauppa netissä</h1>
                        <h2>Löydä unelmiesi lautapeli <span className='purple'>Bamboolla</span></h2>
                        <a href="#features">
                            <button className='btn'>Selaa pelejä</button>
                        </a>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={UndrawBoardgames} alt="" className='header__img'/>
                        <img src={bamboos} alt="" className='bamboos header__img'/>
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
