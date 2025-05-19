import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import { Link, useParams } from 'react-router-dom'
import { apiUrl, fileUrl } from '../components/common/http'

const ServiceDetails = () => {
    const params = useParams();
    const [services, setServices] = useState([]);
    const [service, setService] = useState([]);
    // fetch single serive
    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'get-services', {
            'method': 'GET',
        });
        const result = await res.json();
        console.log(result);
        setServices(result.data);
    }
    // fetch single serive
    const fetchSingleService = async () => {
        const res = await fetch(apiUrl + 'get-service/' + params.id, {
            'method': 'GET',
        });
        const result = await res.json();
        // console.log(result);
        setService(result.data);
    }
    useEffect(() => {
        fetchServices();
        fetchSingleService();

    }, [params.id]);
    return (
        <>
            <Header />
            <Hero
                preheading='Quality. Integrity. Vakue'
                heading={`${service.title}`}
                text='' />
            <section className='section-10'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow border-0 sidebar">
                                <div className="card-body p-4">
                                    <h3 className='my-3'>Our Service</h3>
                                    <ul>
                                        {
                                            services && services.map(service => {
                                                return (


                                                    <li key={service.id} className='py-2'>

                                                        <Link to={`/service/${service.id}`} >{service.title}</Link>
                                                    </li>
                                                );

                                            })
                                        }
                                    </ul>

                                </div>
                            </div>

                        </div>
                        <div className="col-md-9">
                            <div>
                                <img className='w-100' src={`${fileUrl}upload/services/large/${service.image}`} alt="Service Image" />
                            </div>
                            <h3 className="py-4">
                                {service.title}
                            </h3>
                            <div dangerouslySetInnerHTML={{ __html: service.content }} >

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

export default ServiceDetails
