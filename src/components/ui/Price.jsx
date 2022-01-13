import React from 'react';

const Price = ({ originalPrice, salePrice }) => {
    return (
        <div className="boardgame__price">
            {
                salePrice
                ?
                (<>
                <span className="boardgame__price--normal">
                {originalPrice.toFixed(2)} €
                </span>
                {salePrice.toFixed(2)} €
                </>)
                :
                (<>
                {originalPrice.toFixed(2)} €
                </>)
            }
        </div>
    );
}

export default Price;
