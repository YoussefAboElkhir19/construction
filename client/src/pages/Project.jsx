import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import { apiUrl, fileUrl } from '../components/common/http'
import { Link } from 'react-router-dom'

const Project = () => {
    // state
    const [projects, setProjects] = useState([]);

    // function fetch data
    const fetchprojects = async () => {
        const res = await fetch(apiUrl + 'get-projects',
            {
                method: 'GET',
            }
        )
        const result = await res.json();
        // console.log(result);
        setProjects(result.data);
    }
    useEffect(() => {
        fetchprojects();
    }, [])
    return (
        <>
            <Header />
            <Hero
                preheading='Quality. Integrity. Vakue'
                heading='Project'
                text='We are the best construction company in Egypt <br />
                                    We are the best construction company in Egypt'/>
            <section className='section-3 py-4'>
                <div className="container py-4">
                    <div className="section-header text-center">
                        <span data-aos="fade-up"
                            data-aos-delay="400">our project</span>
                        <h2 data-aos="fade-left"
                            data-aos-delay="200">Discover our divers range of project</h2>
                        <p data-aos="fade-rigth"
                            data-aos-delay="400"> The construction industry is a major driver of economic growth</p>
                    </div>
                    <div className="row">

                        {
                            projects && projects.map(project => {
                                return (

                                    < div className="col-md-4 col-lg-4"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        <div className="item">
                                            {/* image */}
                                            <div className="service-image">
                                                <img src={`${fileUrl}upload/projects/small/${project.image}`} alt='Project image' />

                                            </div>
                                            {/* body */}
                                            <div className="service-body">
                                                <div className="service-title">
                                                    <h3>{project.construction_type}</h3>

                                                </div>
                                                <div className="service-content">
                                                    <p>{project.content}</p>
                                                </div>
                                                <Link to={`/projects/${project.id}`} className='btn btn-primary small'>Read More</Link>
                                            </div>

                                        </div>

                                    </div>
                                )

                            })
                        }


                    </div>

                </div>

            </section >
            <Footer />
        </>
    )
}

export default Project
