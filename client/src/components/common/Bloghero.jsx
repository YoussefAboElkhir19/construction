import React, { useEffect, useState } from 'react'

import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom';

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
                    <h2>BLOG & NEWS</h2>
                    <h3>Articles $ blog posts</h3>
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
                                                <Link to={`/article/${article.id}`} className='btn btn-primary small'>Read More</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }






                </div>
                {/* Botton  */}
                <div className='d-flex justify-content-center mt-5 '>
                    <Link to="/blog" className='  btn btn-primary large'  >View All Articles</Link>

                </div>

            </div>

        </section>
    )
}

export default Bloghero
