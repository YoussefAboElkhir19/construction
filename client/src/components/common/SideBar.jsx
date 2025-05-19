import React, { useContext } from 'react'
import { AuthContext } from '../backend/context/Auth';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className="card border-0 shadow">
            <div className="card-body p-4 sidebar">
                <h3>Side Bar</h3>
                <ul >
                    <li className='fs-6 fw-semibold my-4'><Link to='/admin/dashbord'>Dashbord</Link></li>
                    <li className='fs-6 fw-semibold mb-4'><Link to='/admin/services' >Services</Link></li>
                    <li className='fs-6 fw-semibold mb-4'><Link to="/admin/projects">Projects</Link></li>
                    <li className='fs-6 fw-semibold mb-4'><Link to="/admin/articles">Article</Link></li>
                    <li className='fs-6 fw-semibold mb-4'><Link to="/admin/testimonals">Testimonail</Link></li>
                    <li className='fs-6 fw-semibold mb-4'>
                        <button onClick={logout} className='btn btn-danger'>
                            Logout
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideBar
