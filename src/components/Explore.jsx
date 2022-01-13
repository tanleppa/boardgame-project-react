import React from 'react';
import { Link } from "react-router-dom"

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>
                        Löydä lisää <span className="purple">Lautapelejä</span>
                    </h2>
                    <Link to="/boardgames">
                        <button className="btn">Kaikki pelit</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;
