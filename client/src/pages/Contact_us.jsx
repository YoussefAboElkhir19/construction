import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Hero from '../components/common/Hero'

const Contact_us = () => {
    return (
        <>
            <Header />
            <Hero
                preheading='Quality. Integrity. Vakue'
                heading='Contact Us '
                text='We are the best construction company in Egypt <br />
                                    We are the best construction company in Egypt'/>

            <section className='section-9 py-5'>
                <div className="container">

                    <div className="section-header text-center">
                        <h2>Contact Us</h2>
                        <p> The construction industry is a major driver of economic growth</p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-3 mb-4 ">
                            <div className="card shadow border-0 p-4">
                                <div className="card-body">
                                    <h3>Call Us:</h3>
                                    <div>
                                        <p>(888-444-000)</p>
                                        <p>(999-222-000)</p>
                                    </div>
                                    <h3 className='mt-4'>You Can Write Us:</h3>
                                    <div>
                                        <a href="#">example@example.com</a>
                                    </div>
                                    <div>
                                        <a href="#">info@example.com</a>
                                    </div>
                                    <h3 className='mt-4'>Address:</h3>
                                    <div>123 Street, City, Country
                                        <br />
                                        123 Street, City, Country</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-9">

                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <form action="">
                                        <div className="row mb-4">
                                            <div className="col-md-6 ">
                                                <label htmlFor="" className='form-label'>Name</label>
                                                <input type="text" className=' form-control form-control-lg' placeholder='Enter Name' />
                                            </div>
                                            <div className="col-md-6 ">
                                                <label htmlFor="" className='form-label'>Email</label>
                                                <input type="text" className=' form-control form-control-lg' placeholder='Enter Email' />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="col-md-6">
                                                <label htmlFor="" className='form-label'>Phone</label>
                                                <input type="text" className=' form-control form-control-lg' placeholder='Phone No.' />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="" className='form-label'>Subject</label>
                                                <input type="text" className=' form-control form-control-lg' placeholder='Enter Subject' />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="" className='form-label'>Message</label>
                                            <textarea name="" id="" rows={5} className=' form-control form-control-lg'>

                                            </textarea >
                                            <button className='btn btn-primary mt-5 p-3'>Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </section>

            <Footer />
        </>
    )
}

export default Contact_us
