import React, { useState, useRef, useMemo } from 'react'
import Footer from '../../common/Footer'
import JoditEditor from 'jodit-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import SideBar from '../../common/SideBar'
import Header from '../../common/Header'
import { useForm } from "react-hook-form";
import { apiUrl, token, fileUrl } from '../../common/http';
import { toast } from 'react-toastify';

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const params = useParams();
    const [content, setContent] = useState('');
    const [article, setarticle] = useState('');
    const [imageId, setImageId] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const config = useMemo(() => ({
        readonly: false,
        placeholder: placeholder || ''
    }), [placeholder]);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'articles/' + params.id, {
                'method': 'GET',
                'headers': {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setContent(result.data.content)
            setarticle(result.data);
            return {
                title: result.data.title,
                slug: result.data.slug,
                author: result.data.author,
                short_desc: result.data.short_desc,
                status: result.data.status,
            }
        }
    });

    const onSubmit = async (data) => {
        const newData = { ...data, content, imageId };
        setIsDisable(true);
        const res = await fetch(apiUrl + 'articles/' + params.id, {
            'method': 'PUT',
            'headers': {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        setIsDisable(false);
        if (result.status === true) {
            toast.success(result.message);
            navigate('/admin/articles');
        } else {
            toast.error(result.message);
        }
    }

    const handelFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);

        await fetch(apiUrl + 'temp-images', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
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
                            <SideBar />
                        </div>
                        <div className="col-md-9 dashbord">
                            <div className="card  border-0 shadow">
                                <div className="card-body p-5">
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <h4>Edit article</h4>
                                        <Link to="/admin/articles" className='btn btn-primary'>Back</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="title">Title</label>
                                            <input
                                                id="title"
                                                {...register('title', { required: 'Title is required ' })}
                                                type="text"
                                                placeholder='write title'
                                                className={`form-control ${errors.title && 'is-invalid'}`}
                                            />
                                            {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="slug">Slug</label>
                                            <input
                                                id="slug"
                                                {...register('slug', { required: 'Slug is required ' })}
                                                type="text"
                                                placeholder='write slug'
                                                className={`form-control ${errors.slug && 'is-invalid'}`}
                                            />
                                            {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="author">Author</label>
                                            <input
                                                id="author"
                                                {...register('author', { required: 'Author is required ' })}
                                                type="text"
                                                placeholder='write author'
                                                className={`form-control ${errors.author && 'is-invalid'}`}
                                            />
                                            {errors.author && <p className='invalid-feedback'>{errors.author?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="short_desc">Short Description</label>
                                            <textarea
                                                id="short_desc"
                                                placeholder='write short description'
                                                {...register('short_desc', { required: 'Short Description is required ' })}
                                                className={`form-control ${errors.short_desc && 'is-invalid'}`}
                                                rows={5}
                                            />
                                            {errors.short_desc && <p className='invalid-feedback'>{errors.short_desc?.message}</p>}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="content">Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                            />
                                            {/* Optionally show error for content */}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status">Status</label>
                                            <select
                                                id="status"
                                                {...register('status', { required: 'Status is required ' })}
                                                className='form-control'
                                            >
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image">Image</label>
                                            <br />
                                            <input
                                                id="image"
                                                onChange={handelFile}
                                                type="file"
                                                className='form-control'
                                            />
                                        </div>
                                        <div className="p-3">
                                            {article.image && <img src={fileUrl + 'upload/articles/small/' + article.image} alt="Imagearticle" />}
                                        </div>
                                        <button disabled={isDisable} className='btn btn-primary' type='submit'>Update</button>
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