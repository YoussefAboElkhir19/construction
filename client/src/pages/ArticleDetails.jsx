import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import { Link, useParams } from 'react-router-dom'
import { apiUrl, fileUrl } from '../components/common/http'
function ArticleDetails() {
    const params = useParams();
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState([]);
    // fetch single serive
    const fetchArticle = async () => {
        const res = await fetch(apiUrl + 'get-articles', {
            'method': 'GET',
        });
        const result = await res.json();
        console.log(result);
        setArticles(result.data);
    }
    // fetch single serive
    const fetchSingleArticle = async () => {
        const res = await fetch(apiUrl + 'get-article/' + params.id, {
            'method': 'GET',
        });
        const result = await res.json();
        // console.log(result);
        setArticle(result.data);
    }
    useEffect(() => {
        fetchArticle();
        fetchSingleArticle();

    }, [params.id]);
    return (
        <>
            <Header />
            <Hero
                preheading='Quality. Integrity. Vakue'
                heading={`${article.title}`}
                text='' />
            <section className='section-10'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow border-0 sidebar">
                                <div className="card-body p-4">
                                    <h3 className='my-3'>Articles</h3>
                                    <ul>
                                        {
                                            articles && articles.map(article => {
                                                return (


                                                    <li key={article.id} className='py-2'>

                                                        <Link to={`/article/${article.id}`} >{article.title}</Link>
                                                    </li>
                                                );

                                            })
                                        }
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div data-aos="zoom-in"
                                data-aos-delay="200">
                                <img className='w-100 border rounded-lg' src={`${fileUrl}upload/articles/large/${article.image}`} alt="article Image" />
                            </div>
                            <div className="p-4">
                                <div className='d-flex align-items-center mb-3'>
                                    <span className="text-secondary me-2 fs-4" >Author:</span>
                                    <span className="fs-5">{article.author}</span>
                                </div>
                                <div className='mb-3'>
                                    <h5 className="text-secondary mb-2">Content:</h5>
                                    <div
                                        className="bg-light p-3 rounded"
                                        style={{ minHeight: 80 }}
                                        dangerouslySetInnerHTML={{ __html: article.content }}
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* Testimonial */}
                    <div className="row">
                        <div className="col-md-12"></div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default ArticleDetails
