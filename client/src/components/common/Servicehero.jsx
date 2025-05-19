import React, { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom';

const Servicehero = () => {
    const [services, setServices] = useState([]);
    const fetchLast = async () => {
        const res = await fetch(apiUrl + 'get-last-services?limit=6', {
            'method': 'GET',

        });
        const result = await res.json();
        // console.log(result);
        setServices(result.data);


    }
    useEffect(() => {
        fetchLast();
    }, [])
    return (
        <section className='section-3 py-4'>
            <div className="container py-4">
                <div className="section-header text-center">
                    <span data-aos="fade-up"
                        data-aos-delay="400">our services</span>
                    <h2 data-aos="fade-right"
                        data-aos-delay="400">Our contruction Services</h2>
                    <p data-aos="fade-left"
                        data-aos-delay="400"> The construction industry is a major driver of economic growth</p>
                </div>
                <div className="row">
                    {
                        services && services.map(service => {
                            return (

                                <div className="col-md-4 col-lg-4" key={`service-${service.id}`}>
                                    <div className="item">
                                        {/* image */}
                                        <div className="service-image">
                                            <img src={`${fileUrl}upload/services/small/${service.image}`} alt='Service image' />
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
                {/* Botton  */}
                <div className='service-btn'>
                    <Link to='/service' className='btn btn-primary large'>view all services</Link>

                </div>
            </div>

        </section>
    )
}

export default Servicehero
