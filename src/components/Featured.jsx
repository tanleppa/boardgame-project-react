import React from 'react';
import Book from './ui/Book';
import { books } from "../data"

const Featured = () => {
    return (
        <section id="features">
            <div className="container">
                <div className="row">
                    <h2 className="secction__title">
                        Featured <span className='purple'>Books</span>
                    </h2>
                    <div className="books">
                        {books
                            .filter(book => book.rating === 5)
                            .slice(0, 4)
                            .map(book => <Book key={book.id}
                                               book={book} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;