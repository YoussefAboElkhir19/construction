import React, { useEffect, useState } from 'react'

import { apiUrl, fileUrl } from './http';

const Bloghero = () => {
    const [articles, setArticle] = useState([]);
    // Fetching data from API
    const fetchArticle = async () => {
        const res = await fetch(apiUrl + 'get-last-articles?limit=3', {
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

                                <div key={article.id} className="col-md-4">
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
    )
}

export default Bloghero
