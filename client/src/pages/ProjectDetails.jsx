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
                            <div className="mb-4 rounded shadow-sm overflow-hidden bg-white">
                                <img
                                    className='w-100'
                                    src={`${fileUrl}upload/projects/large/${project.image}`}
                                    alt="project"
                                    style={{ objectFit: "cover", maxHeight: 400 }}
                                />
                                <div className="p-4">
                                    <div className='d-flex align-items-center mb-3'>
                                        <span className="text-secondary me-2 fs-4" >Title:</span>
                                        <span className="fs-5">{project.title}</span>
                                    </div>
                                    <div className='mb-3'>
                                        <h5 className="text-secondary mb-2">Content:</h5>
                                        <div
                                            className="bg-light p-3 rounded"
                                            style={{ minHeight: 80 }}
                                            dangerouslySetInnerHTML={{ __html: project.content }}
                                        />
                                    </div>
                                    <div className='row text-center'>
                                        <div className='col-md-4 mb-3'>
                                            <div className="border rounded p-3 h-100">
                                                <h5 className="text-muted">Construction Type</h5>
                                                <div className="fw-semibold">{project.construction_type}</div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 mb-3'>
                                            <div className="border rounded p-3 h-100">
                                                <h5 className="text-muted">Location</h5>
                                                <div className="fw-semibold">{project.location}</div>
                                            </div>
                                        </div>
                                        <div className='col-md-4 mb-3'>
                                            <div className="border rounded p-3 h-100">
                                                <h5 className="text-muted">Sector</h5>
                                                <div className="fw-semibold">{project.sector}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            <Footer />
        </>

    )
}

export default ProjectDetails
