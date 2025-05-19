import React, { useState, useRef, useMemo } from 'react'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import SideBar from '../../common/SideBar'
import { Link, useNavigate } from 'react-router-dom';
// To Validation INput Form
import { useForm } from "react-hook-form";
import { apiUrl, token } from '../../common/http';
import { toast } from 'react-toastify';
// inpuy and add tools whrn write a content 
import JoditEditor from 'jodit-react'
const Create = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Content'
    }),
        [placeholder]
    );
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
        const newData = { ...data, "content": content, "imageId": imageId }
        const res = await fetch(apiUrl + 'articles', {
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
            navigate('/admin/articles');

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
                                        <h4>Create New article</h4>
                                        <Link to="/admin/articles" className='btn btn-primary'>Back</Link>
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
                                            <label htmlFor="">Author</label>

                                            <input  {...register('author')}
                                                type="text" placeholder='write author' className='form-control' />

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
                                        <div className="md-3">
                                            <label htmlFor="">Image</label>
                                            <input onChange={handelFile} type="file" className='form-control'


                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="">Status</label>
                                            <select name="
                                            " id=""

                                                {
                                                ...{
                                                    ...register('status')


                                                }
                                                } className='form-control'>
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>

                                        </div>
                                        <button disabled={isDisable} className='btn btn-success' type='submit'>Submit</button>

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
