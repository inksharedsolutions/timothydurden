import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-mock-up-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'hadar-shmaryahu-yaakov',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Hadar Shmaryahu Ya'akov"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Sailor and the Sermon`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                        <p>
                                        Based on a true-life story spanning a period of fifty-plus years. Sailor, the main character, struggled all his life to find the meaning of life. He searched and searched for the true belief and practice of Christianity and religion in general. Deeply torn with the concept of love and relationship that included his siblings and commitment in holy matrimony. His entire life was a life of schooling, education, and revelation about himself and interacting with others. His career in the United States Armed Forces would reveal much of his fears and catapult him into the real world of life.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: 'https://www.stratton-press.com/books/the-sailor-and-the-sermon/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-sailor-and-the-sermon-hadar-shmaryahu-yaakov/1137421373?ean=9781648950568',
                                    amazon: 'https://www.amazon.com/Sailor-Sermon-Hadar-Shmaryahu-Yaakov-ebook/dp/B08F2XKQN7/ref=sr_1_1?dchild=1&keywords=9781648950568&qid=1597083446&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Sailor-Sermon-Hadar-Shmaryahu-Yaakov/dp/1648950558/ref=sr_1_1?dchild=1&keywords=9781648950551&qid=1597083474&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-sailor-and-the-sermon-hadar-shmaryahu-yaakov/1137421373?ean=9781648950551',
                                    booksamillion: 'https://www.booksamillion.com/p/Sailor-Sermon/Hadar-Shmaryahu-Yaakov/9781648950551?id=8075862975823',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;