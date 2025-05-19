import React, { useState, useRef, useMemo } from 'react'
import Footer from '../../common/Footer'
import JoditEditor from 'jodit-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SideBar from '../../common/SideBar'
import Header from '../../common/Header'
// To Validation INput Form
import { useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from '../../common/http';
import { toast } from 'react-toastify';
const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const params = useParams();
    const [content, setContent] = useState('');
    const [service, setService] = useState('');
    const [imageId, setImageId] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || ''
    }),
        [placeholder]
    );
    // Navigaton 
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // To GetVAlues 
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'services/' + params.id, {
                'method': 'GET',
                'headers': {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`

                }
            });
            const result = await res.json();
            console.log(result);
            setContent(result.data.content)
            setService(result.data);
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc: result.data.short_desc,
                status: result.data.status,

            }
        }
    })
    // Funtion to Submit Data After Update 
    const onSubmit = async (data) => {
        // newData contain data = title , slug , short_desc status and content = content 
        const newData = { ...data, "content": content, "imageId": imageId }
        const res = await fetch(apiUrl + 'services/' + params.id, {
            'method': 'PUT',
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
            navigate('/admin/services');

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
                                        <h4>Edit Service</h4>
                                        <Link to="/admin/services" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="">Title</label>
                                            <input  {
                                                ...register('title', { required: 'Title is required ' }

                                                )
                                            } type="text" placeholder='write title' className={`form-control ${errors.title && 'is-invalid'}`} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Slug</label>

                                            <input  {
                                                ...register('slug', { required: 'Slug is required ' }

                                                )
                                            } type="text" placeholder='write slug' className={`form-control ${errors.title && 'is-invalid'}`} />
                                            {/* errors will return when field validation fails  */}
                                            {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Short Description</label>
                                            <textarea
                                                placeholder='write short description'  {
                                                ...register('short_desc', { required: 'Short Description is required ' }

                                                )
                                                } type="text" title='short description' className={`form-control ${errors.short_desc && 'is-invalid'}`} rows={5} >
                                            </textarea>
                                            {/* errors will return when field validation fails  */}
                                            {errors.short_desc && <p className='invalid-feedback'>{errors.short_desc?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Content</label>

                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { }}
                                            />
                                            {/* errors will return when field validation fails  */}
                                            {errors.content && <p className='invalid-feedback'>{errors.content?.message}</p>}
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="">Status</label>
                                            <select name="
                                            " id=""

                                                {
                                                ...{
                                                    ...register('status', { required: 'Status is required ' }

                                                    )
                                                }
                                                } className='form-control'>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>

                                        </div>
                                        <div className="md-3">
                                            <label htmlFor="">Image</label>
                                            <br />
                                            <input onChange={handelFile} type="file" className='form-control' />

                                        </div>
                                        <div className="p-3">
                                            {
                                                service.image && <img src={fileUrl + 'upload/services/small/' + service.image} alt="ImageService" />

                                            }

                                        </div>

                                        <button disabled={isDisable} className='btn btn-success' type='submit'>Update</button>

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

export default Edit
