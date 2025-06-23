
import { useState } from 'react'

import Footer from '../../common/Footer'
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import { Link, useNavigate } from 'react-router-dom';
// To Validation INput Form
import { useForm } from "react-hook-form";
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';
function Create() {
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);


    // Navigaton 
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // Funvtion to Submit Data
    const onSubmit = async (data) => {
        // newData contain data = title , slug , short_desc status and content = content 
        const newData = { ...data, "imageId": imageId }
        const res = await fetch(apiUrl + 'teams', {
            'method': 'POST',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`

            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        // console.log(result);
        //Check Status
        if (result.status == true) {
            toast.success(result.message);
            navigate('/admin/teams');

        } else {

            toast.error(result.message);
        }
    }
    // Function to Upload Image
    const handelFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);

        await fetch(apiUrl + 'temp-images', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', // Keep only the Accept header
                'Authorization': `Bearer ${token()}`,
            },
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                if (result.status === false) {
                    toast.error(result.errors.image[0]);
                } else {
                    setImageId(result.data.id);
                    toast.success(result.message);
                }
            })

    };
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
                                <div className="card-body p-5">

                                    <div className="d-flex justify-content-between align-items-center ">
                                        <h4>Create New Member Of Team</h4>
                                        <Link to="/admin/teams" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>


                                        <div className="mb-3">
                                            <label htmlFor="">Name</label>
                                            <input  {
                                                ...register('name', { required: 'Name is required ' }

                                                )
                                            } type="text" placeholder='write name' className={`form-control ${errors.name && 'is-invalid'}`} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Job</label>
                                            <input  {
                                                ...register('job', { required: 'Job is required ' })

                                            } type="text" placeholder='write job' className={`form-control ${errors.job && 'is-invalid'}`} />
                                            {errors.job && <p className='invalid-feedback'>{errors.job?.message}</p>}

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">URL</label>
                                            <input  {
                                                ...register('URL', { required: 'URL is required ' }

                                                )

                                            } type="text" placeholder='write URL' className={`form-control ${errors.URL && 'is-invalid'}`} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.URL && <p className='invalid-feedback'>{errors.URL?.message}</p>}

                                        </div>

                                        <div className="md-3">
                                            <label htmlFor="">Image</label>
                                            <input onChange={handelFile} type="file" className='form-control'


                                            />
                                        </div>

                                        <button disabled={isDisable} className='mt-3 btn btn-success' type='submit'>Submit</button>

                                    </form>

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

export default Create
