import React, { useEffect } from 'react';
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

const Home = () => {
    useEffect(() => {
        document.querySelector('body').scrollTo(0,0)
    }, [])

    return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
    );
}

export default Home;
