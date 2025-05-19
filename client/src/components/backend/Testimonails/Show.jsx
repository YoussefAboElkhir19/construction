import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http';
import SideBar from '../../common/SideBar';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Show = () => {
    const [testimonals, setTestimonals] = useState([]);
    // Fetching data from API
    const fetchtestimonals = async () => {
        const res = await fetch(apiUrl + 'testimonals', {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`

            }
        });
        const result = await res.json();
        setTestimonals(result.data);
        console.log(result);
    }
    // function delete 
    const deleteTestimonal = async (id) => {
        //Warning before delete
        if (confirm("Are you sure you want to delete this testimonal?")) {

            const res = await fetch(apiUrl + 'testimonals/' + id, {
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
                // to remove the deleted testimonal from the list
                const Newtestimonals = testimonals.filter(testimonal => testimonal.id != id);
                settestimonals(Newtestimonals);

                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }
        }


    }
    useEffect(() => {
        fetchtestimonals();
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
                                        <h4>testimonals</h4>
                                        <Link to="/admin/testimonals/create" className='btn btn-primary'>Create</Link>

                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Testimonal</th>
                                                <th scope="col">Citation</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                testimonals && testimonals.map(testimonal => {
                                                    return (
                                                        <tr key={testimonal.id}>
                                                            <td>{testimonal.id}</td>
                                                            <td>{testimonal.testimonal}</td>
                                                            <td>{testimonal.citation}</td>
                                                            <td>
                                                                {
                                                                    (testimonal.status == 1) ? "Active" : "Block"
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                <Link to={`/admin/testimonals/edit/${testimonal.id}`} className='btn btn-primary'>Edit</Link>
                                                                <Link onClick={() => deleteTestimonal(testimonal.id)} className='btn btn-danger ms-2'>Delete</Link>
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
