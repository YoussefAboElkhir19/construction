import React, { use, useContext } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
// To Validation INput Form
import { useForm } from "react-hook-form"
// Tost Notification
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/Auth';
const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        // fetch data 
        const res = await fetch("http://backend.test/api/authenticate",
            {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
        // 
        const result = await res.json();
        if (result.status == false) {
            toast.error(result.message)
        } else {
            // step 1 : save token in local storage
            const userInfo = {
                id: result.id,
                token: result.token,
            };
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
            // step 2 :  redirect to dashbord
            // login by using context to security
            login(userInfo);
            navigate('/admin/dashbord')

        }

    }

    return (

        <>
            <Header />
            <main>
                <div className="container d-flex justify-content-center align-items-center ">
                    <div className="login-form my-5 ">
                        <div className="card border-0 shadow ">
                            <div className="card-body p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className='mb-3'>Login Here</h3>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Email</label>
                                        <input
                                            {
                                            ...register('email'
                                                , {
                                                    required: 'This field is required '
                                                    , pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: 'Invalid email address'
                                                    }
                                                }
                                            )

                                            }
                                            type='text' className={`form-control ${errors.email && 'is-invalid'}`} placeholder='email' />
                                        {/* errors will return when field validation fails  */}
                                        {errors.email && <p className='invalid-feedback'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className='form-label'>Password</label>
                                        <input
                                            {
                                            ...register('password',
                                                {
                                                    required: 'This field is required ',
                                                    // pattern: {
                                                    //     value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                    //     message: 'Password must be at least 8 characters long and contain at least one letter and one number.'
                                                    // }
                                                }



                                            )
                                            }
                                            type="password" className={`form-control ${errors.password && 'is-invalid'}`} placeholder='password' />
                                        {/* errors will return when field validation fails  */}
                                        {errors.password && <p className='invalid-feedback'>{errors.password?.message}</p>}

                                    </div>
                                    <button type='submit' className=' btn btn-primary'>Login</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default Login
