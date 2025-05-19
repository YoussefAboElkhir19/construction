import React, { useEffect, useState } from 'react'
import ContructionImage from '../../assets/images/construction5.jpg';
import { Link } from 'react-router-dom';
import { apiUrl, fileUrl } from './http';

const Projecthero = () => {

    // state
    const [projects, setProjects] = useState([]);

    // function fetch data
    const fetchprojects = async () => {
        const res = await fetch(apiUrl + 'get-last-projects?limit=3',
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

                                < div key={`project-${project.id}`} className="col-md-4 col-lg-4" >
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
                                                <p>{project.short_desc}</p>
                                            </div>
                                            <Link to={`/project/${project.id}`} className='btn btn-primary small'>Read More</Link>
                                        </div>

                                    </div>

                                </div>
                            )

                        })
                    }


                </div>
                {/* Botton  */}
                <div className='service-btn'>
                    <Link to="/project" className='btn btn-primary large'  >view all projects</Link>

                </div>
            </div>

        </section >
    )
}

export default Projecthero
