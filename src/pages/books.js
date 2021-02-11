import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/101-biblical-words-min.png'
import Book2 from '../../static/books/lambs-clothing1-min.png'
import Book3 from '../../static/books/sailor-min.png'
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
            <Helmet title="Books | Hadar Shmaryahu Ya'akov"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={``}
                    contextHeading={`Books`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Sailor and the Sermon`,
                                spanFirst: ``,
                                imgSrc: Book3,
                                id: 'sailor-sermon',
                                content:
                                    `
                                        <p>
                                        Based on a true-life story spanning a period of fifty-plus years. Sailor, the main character, struggled all his life to find the meaning of life. He searched and searched for the true belief and practice of Christianity and religion in general. Deeply torn with the concept of love and relationship that included his siblings and commitment in holy matrimony. His entire life was a life of schooling, education, and revelation about himself and interacting with others. His career in the United States Armed Forces would reveal much of his fears and catapult him into the real world of life.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: '',
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

                        <BookInfo
                            data={{
                                title: `101 Biblical Words`,
                                spanFirst: `About the Christmas Holiday`,
                                imgSrc: Book1,
                                id: 'biblical-words',
                                content:
                                    `
                                        <p>
                                        Language is understood by certain words spoken to communicate to one another. This book presents a comprehensive look at certain words in the Bible and certain words spoken during the holidays. The objective is to consider the relevancy of these words as it relates to the birth of Messiah. The entire world is familiar with the Christmas celebration and the New Years observance. If Christianity is the way of truth practiced and believed over centuries of learning, the author suggest that Christianity should reflect its teachings. Christmas observers who believe, endorse and practice the celebration of Christmas have not embraced the Truth of Scripture found in the Bible. On one hand Christians claim to be followers of Jesus Christ and on the other hand Christians follow the traditions and practices of the world. This is impossible to do if you are a true follower of the teachings of Jesus Christ. The Bible record found in 1 John 2:1517 says you cannot love God and the world at the same time. In fact, the Apostles say whoever is a friend of the world is an enemy of God (James 4:4). The Christmas celebration and all its festivities is friendship with the world. How can one objectively read 101 Biblical Words and continue to follow the practice of the Christmas celebration?
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: '',
                                    barnes: '',
                                    amazon: 'https://www.amazon.com/101-Biblical-Words-Timothy-Durden-ebook/dp/B0031QP816/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1609737096&sr=1-2',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/101-Biblical-Words-Timothy-Durden/dp/1615793283/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1609737096&sr=1-2',
                                    barnes: '',
                                    booksamillion: '',
                                }
                            }}
                        />

                        <BookInfo
                            data={{
                                title: `A Lie in Lambs Clothing (Revised)`,
                                spanFirst: `No Christ - No Christian - No Christmas`,
                                imgSrc: Book2,
                                id: 'lambs-clothing',
                                content:
                                    `
                                        <p>
                                        Lies have been the unfortunate nature of man ever since the days of Qayin (Cain) and Hebel (Abel). No one really likes to be lied to, but many people practice lies daily. The information in this book looks at how the practice and belief of Christmas began and how it evolved over the years. Christianity introduced the religious practice of Christmas to the entire world and has been able to preserve the belief for centuries. Religion has been one of the most controlling factors of Kings, Queens, Empires, and Nations from the time Elohim gave His Word to His people. A Lie in Lambs Clothing (Revised) reveals the origin and the reason Christmas is one of the most observed practices worldwide. Nowadays, both Christian and secular world share a common belief and practice that does not truthfully represent The Scriptures. Many have come to terms about these lies and have been enlightened by The Most High Elohim-YAH. The mission ordained by Heaven is to expose and eliminate the identity of the lie.
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: '',
                                    barnes: '',
                                    amazon: 'https://www.amazon.com/Lie-Lambs-Clothing-Revised-Christian-ebook/dp/B07K2M91XN/ref=sr_1_1?dchild=1&keywords=A+Lie+in+Lambs+Clothing+%28Revised%29&qid=1609742966&s=digital-text&sr=1-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Lie-Lambs-Clothing-Revised-Christian/dp/1728744105/ref=sr_1_1?keywords=A+Lie+in+Lambs+Clothing+%28Revised%29&qid=1609742994&s=books&sr=1-1',
                                    barnes: '',
                                    booksamillion: '',
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