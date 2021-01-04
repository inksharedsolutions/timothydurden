import React from 'react'
import { Link } from 'gatsby';
import AuthorImg from '../../static/author/author-profile.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        Hadar Shmaryahu Ya'akov is the Hebrew name of the author, Timothy James Durden Sr. A career in the United States Navy was the catalyst for the author to write. 
                        </p>

                        <h1 className="author-name-tag">
                            <span>Hadar </span>
                            <span>Shmaryahu Ya'akov</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;