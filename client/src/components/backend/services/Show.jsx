import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http';
import SideBar from '../../common/SideBar';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Show = () => {
    const [services, setServices] = useState([]);
    // Fetching data from API
    const fetchServices = async () => {
        const res = await fetch(apiUrl + 'services', {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`

            }
        });
        const result = await res.json();
        setServices(result.data);
        console.log(result);
    }
    // function delete 
    const deleteService = async (id) => {
        //Warning before delete
        if (confirm("Are you sure you want to delete this service?")) {

            const res = await fetch(apiUrl + 'services/' + id, {
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
                // to remove the deleted service from the list
                const NewServices = services.filter(service => service.id != id);
                setServices(NewServices);

                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }
        }


    }
    useEffect(() => {
        fetchServices();
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
                                        <h4>Services</h4>
                                        <Link to="/admin/services/create" className='btn btn-primary'>Create</Link>

                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Slug</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services && services.map(service => {
                                                    return (
                                                        <tr key={service.id}>
                                                            <td>{service.id}</td>
                                                            <td>{service.title}</td>
                                                            <td>{service.slug}</td>
                                                            <td>
                                                                {
                                                                    (service.status == 1) ? "Active" : "Block"
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                <Link to={`/admin/services/edit/${service.id}`} className='btn btn-primary'>Edit</Link>
                                                                <Link onClick={() => deleteService(service.id)} href="#" className='btn btn-danger ms-2'>Delete</Link>
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
