import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'

import { apiUrl, fileUrl } from '../components/common/http'
import Bloghero from '../components/common/Bloghero'

const Blog = () => {
    const [articles, setArticle] = useState([]);
    // Fetching data from API
    const fetchArticle = async () => {
        const res = await fetch(apiUrl + 'get-articles', {
            'method': 'GET',
        }

        );
        const result = await res.json();
        console.log(result);
        setArticle(result.data);
    }
    useEffect(() => {
        fetchArticle();

    }, [])


    return (
        <>
            <Header />
            <main>

                <Hero
                    preheading='Quality. Integrity. Vakue'
                    heading='Blog'
                    text='We are the best construction company in Egypt <br />
                                    We are the best construction company in Egypt'/>
                <section className='section-6'>
                    <div className="container">
                        <div className="section-header text-center">
                            <span>BLOG & NEWS</span>
                            <h2>Articles $ blog posts</h2>
                            <p> The construction industry is a major driver of economic growth</p>
                        </div>
                        <div className="row">

                            {
                                articles && articles.map(article => {
                                    return (

                                        <div key={article.id} className="col-md-4 mb-4">
                                            <div className="card shadow border-0">
                                                {/* image card  */}
                                                <div className=''>
                                                    <img className='w-100' src={`${fileUrl}upload/articles/small/${article.image}`} alt='Article image' />
                                                </div>
                                                {/* content card  */}
                                                <div className="content p-4">

                                                    <div className='title mb-4'>
                                                        <a href="">{article.title}</a>
                                                    </div>
                                                    <div>
                                                        <a href="" className='btn btn-primary small'>read more</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }






                        </div>

                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default Blog
