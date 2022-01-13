import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Miksi valita <span className="purple">Bamboo</span>
                    </h2>
                    <div className="highlight__wrapper">

                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt"/>}
                            title="Helppoa ja nopeaa"
                            para="Toimitus jopa samana päivänä"/>

                        <Highlight
                            icon={<FontAwesomeIcon icon="chess-rook"/>}
                            title="10 000+ lautapeliä"
                            para="Bamboosta löytyy peli jokaisen makuun"/>

                        <Highlight
                            icon={<FontAwesomeIcon icon="tags"/>}
                            title="Edullinen"
                            para="Huippusuosittuja pelejä jopa hintaan 10€"/>
                            
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
