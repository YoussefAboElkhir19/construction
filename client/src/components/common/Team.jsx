import { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http';
import { Link } from 'react-router-dom'; import MemderImage from '../../assets/images/team-2.jpg'

function Team() {
    const [team, setteam] = useState([]);
    const fetchLast = async () => {
        const res = await fetch(apiUrl + 'get-last-team?limit=4', {
            'method': 'GET',

        });
        const result = await res.json();
        // console.log(result);
        setteam(result.data);


    }
    useEffect(() => {
        fetchLast();
    }, [])
    return (
        <section className='section-8 bg-light'>
            <div className="container  py-5">
                <div data-aos="fade-up"
                    data-aos-delay="300"
                    className="section-header text-center">
                    <h2>Team</h2>
                    <h3>Our Team</h3>
                    <p> The construction industry is a major driver of economic growth</p>
                </div>
                {/* Card section */}
                <div className="row">
                    {
                        team && team.map(team => {
                            return (

                                <div
                                    data-aos="fade-left"
                                    data-aos-delay="400"
                                    className="col-md-6 col-lg-3">
                                    <div className="card shadow border-0">
                                        {/* image card  */}
                                        <div>
                                            <img src={`${fileUrl}upload/teams/small/${team.image}`} alt="Team Image" className='w-100' />
                                        </div>
                                        {/* content card  */}
                                        <div className="content p-4">

                                            <div className='card-title mb-1'>
                                                <p>{team.name}</p>
                                            </div>
                                            <div className='card-subtitle mb-1'>
                                                <p >{team.job}</p>
                                            </div>
                                            <div>
                                                <a href={team.URL.startsWith('http') ? team.URL : `https://${team.URL}`} target="_blank" rel="noopener noreferrer">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#0077b5" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                                    </svg>
                                                </a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                        )
                    }



                </div>
            </div>

        </section>
    )
}

export default Team
