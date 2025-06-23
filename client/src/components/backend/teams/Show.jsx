import { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http';
import SideBar from '../../common/SideBar';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function Show() {
    const [teams, setteams] = useState([]);
    // Fetching data from API
    const fetchteams = async () => {
        const res = await fetch(apiUrl + 'teams', {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`

            }
        });
        const result = await res.json();
        setteams(result.data);
        console.log(result);
    }
    // function delete 
    const deleteteam = async (id) => {
        //Warning before delete
        if (confirm("Are you sure you want to delete this team?")) {

            const res = await fetch(apiUrl + 'teams/' + id, {
                'method': 'DELETE',
                'headers': {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`

                }
            });
            const result = await res.json();
            if (result.status == true) {
                // if delete success then filter the data and set the state
                // to remove the deleted team from the list
                const Newteams = teams.filter(team => team.id != id);
                setteams(Newteams);

                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }
        }


    }
    useEffect(() => {
        fetchteams();
    }, [])
    return (
        <>
            <Header />
            <main className=''>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Side Bar  */}
                            <SideBar />
                        </div>
                        <div className="col-md-9 dashbord">
                            {/* Main Dashbord  */}
                            <div className="card  border-0 shadow">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center p-4">
                                        <h4>Members Of Team</h4>
                                        <Link to="/admin/teams/create" className='btn btn-primary'>Create</Link>

                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Job</th>
                                                <th scope="col">URL</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                teams && teams.map(team => {
                                                    return (
                                                        <tr key={team.id}>
                                                            <td>{team.id}</td>
                                                            <td>{team.name}</td>
                                                            <td>{team.job}</td>
                                                            <td>{team.URL}</td>

                                                            <td className=''>
                                                                <Link to={`/admin/teams/edit/${team.id}`} className='btn btn-primary'>Edit</Link>
                                                                <Link onClick={() => deleteteam(team.id)} className='btn btn-danger ms-2'>Delete</Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }




                                        </tbody>
                                    </table>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
}

export default Show
