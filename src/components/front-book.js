import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/sailor-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            Based on a true-life story spanning a period of fifty-plus years. Sailor, the main character, struggled all his life to find the meaning of life. He searched and searched for the true belief and practice of Christianity and religion in general. Deeply torn with the concept of love and relationship that included his siblings and commitment in holy matrimony.
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/books">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook