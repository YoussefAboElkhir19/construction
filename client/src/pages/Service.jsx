import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'

import { apiUrl, fileUrl } from '../components/common/http'
import { Link } from 'react-router-dom'
const Service = () => {

    const [services, setServices] = useState([]);
    const fetchAllservices = async () => {
        const res = await fetch(apiUrl + 'get-services', {
            'method': 'GET',

        });
        const result = await res.json();
        // console.log(result);
        setServices(result.data);


    }
    useEffect(() => {
        fetchAllservices();
    }, [])
    return (
        <>
            <Header />
            <main>
                <Hero
                    preheading='Quality. Integrity. Vakue'
                    heading='Service'
                    text='We are the best construction company in Egypt <br />
                                    We are the best construction company in Egypt'/>
                <section className='section-3 py-4'>
                    <div className="container py-4">
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400" className="section-header text-center">
                            <span>our services</span>
                            <h2>Our contruction Services</h2>
                            <p> The construction industry is a major driver of economic growth</p>
                        </div>

                        <div className="row">
                            {
                                services && services.map(service => {
                                    return (

                                        <div
                                            data-aos="fade-up"
                                            data-aos-delay="400"
                                            className="col-md-4 col-lg-4" key={service.id}>
                                            <div className="item">
                                                {/* image */}
                                                <div className="service-image">
                                                    <img src={`${fileUrl}upload/services/large/${service.image}`} alt='Service image' />

                                                </div>
                                                {/* body */}
                                                <div className="service-body">
                                                    <div className="service-title">
                                                        <h3>{service.title}</h3>

                                                    </div>
                                                    <div className="service-content">
                                                        <p>{service.short_desc}</p>
                                                    </div>
                                                    <Link to={`/service/${service.id}`} className='btn btn-primary small'>Read More</Link>
                                                </div>

                                            </div>

                                        </div>
                                    );
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

export default Service
