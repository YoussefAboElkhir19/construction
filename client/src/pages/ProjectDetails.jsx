import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'
import { Link, useParams } from 'react-router-dom'
import { apiUrl, fileUrl } from '../components/common/http'
const ProjectDetails = () => {
    const params = useParams();
    const [projects, setprojects] = useState([]);
    const [project, setproject] = useState([]);
    // fetch single serive
    const fetchprojects = async () => {
        const res = await fetch(apiUrl + 'get-projects', {
            'method': 'GET',
        });
        const result = await res.json();
        console.log(result);
        setprojects(result.data);
    }
    // fetch single serive
    const fetchSingleproject = async () => {
        const res = await fetch(apiUrl + 'get-project/' + params.id, {
            'method': 'GET',
        });
        const result = await res.json();
        // console.log(result);
        setproject(result.data);
    }
    useEffect(() => {
        fetchprojects();
        fetchSingleproject();

    }, [params.id]);
    return (
        <>
            <Header />
            <Hero
                preheading='Quality. Integrity. Vakue'
                heading={`${project.title}`}
                text='' />
            <section className='section-10'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card shadow border-0 sidebar">
                                <div className="card-body p-4">
                                    <h3 className='my-3'>Our project</h3>
                                    <ul>
                                        {
                                            projects && projects.map(project => {
                                                return (


                                                    <li key={project.id} className='py-2'>

                                                        <Link to={`/project/${project.id}`} >{project.title}</Link>
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
                                <img className='w-100' src={`${fileUrl}upload/projects/large/${project.image}`} alt="project Image" />
                            </div>
                            <h3 className="py-4">
                                {project.title}
                            </h3>
                            <div className='my-3'>
                                <h4>Content:</h4>
                                <p>
                                    {project.content}</p>
                            </div>
                            <div className='my-3'>
                                <h4>Construction Type:</h4>
                                <p>
                                    {project.construction_type}</p>
                            </div>
                            <div className='my-3'>
                                <h4>Location:</h4>
                                <p>
                                    {project.location}</p>
                            </div>
                            <div className='my-3'>
                                <h4>Sector:</h4>
                                <p>
                                    {project.sector}</p>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: project.content }} >

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

export default ProjectDetails
