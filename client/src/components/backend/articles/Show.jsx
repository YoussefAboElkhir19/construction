import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { apiUrl, token } from '../../common/http';
import SideBar from '../../common/SideBar';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Show = () => {
    const [article, setArticle] = useState([]);
    // Fetching data from API
    const fetcharticle = async () => {
        const res = await fetch(apiUrl + 'articles', {
            'method': 'GET',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`

            }
        });
        const result = await res.json();
        setArticle(result.data);
        console.log(result);
    }
    // function delete 
    const deletearticle = async (id) => {
        //Warning before delete
        if (confirm("Are you sure you want to delete this Article?")) {

            const res = await fetch(apiUrl + 'articles/' + id, {
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
                // to remove the deleted article from the list
                const Newarticle = article.filter(article => article.id != id);
                setArticle(Newarticle);

                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }
        }


    }
    useEffect(() => {
        fetcharticle();
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
                                        <h4>Article</h4>
                                        <Link to="/admin/articles/create" className='btn btn-primary'>Create</Link>

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
                                                article && article.map(article => {
                                                    return (
                                                        <tr key={article.id}>
                                                            <td>{article.id}</td>
                                                            <td>{article.title}</td>
                                                            <td>{article.slug}</td>
                                                            <td>
                                                                {
                                                                    (article.status == 1) ? "Active" : "Block"
                                                                }
                                                            </td>
                                                            <td className=''>
                                                                <Link to={`/admin/articles/edit/${article.id}`} className='btn btn-primary'>Edit</Link>
                                                                <Link onClick={() => deletearticle(article.id)} href="#" className='btn btn-danger ms-2'>Delete</Link>
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
