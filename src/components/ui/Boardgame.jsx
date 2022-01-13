import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom"
import Price from './Price';
import Rating from './Rating';

const Boardgame = ({boardgame}) => {
    const [img, setImg] = useState()

    const mountedRef = useRef(true)

    useEffect(() => {
        const image = new Image()
        image.src = boardgame.url
        image.onload = () => {
            if (mountedRef.current) {
               setImg(image)
            }
        }
        return () => {
            mountedRef.current = false
        }
    })

    return (
        <div className="boardgame">
            {
                img
                ? (<><Link to={`/boardgames/${boardgame.id}`}>
                <figure
                className="boardgame__img--wrapper">
                    <img
                    src={img.src}
                    alt=""
                    className="boardgame__img"/>
                </figure>
            </Link>
            <div
            className="boardgame__title">
                <Link to={`/boardgames/${boardgame.id}`} className='boardgame__title--link'>
                    {boardgame.title}
                </Link>
            </div>
            <Rating
            rating={boardgame.rating} />
            <Price
            originalPrice={boardgame.originalPrice}
            salePrice={boardgame.salePrice} /></>)
                : (<><div className="boardgame__img--skeleton"></div>
                <div className="skeleton boardgame__title--skeleton"></div>
                <div className="skeleton boardgame__rating--skeleton"></div>
                <div className="skeleton boardgame__price--skeleton"></div></>)
            }
        </div>
    );
}

export default Boardgame;
