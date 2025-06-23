import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CardIcon1 from '../assets/images/icon-1.svg';
import CardIcon2 from '../assets/images/icon-2.svg';
import CardIcon3 from '../assets/images/icon-3.svg';

import Abouthero from '../components/common/Abouthero';
import Servicehero from '../components/common/Servicehero';
import Projecthero from '../components/common/Projecthero';
import Bloghero from '../components/common/Bloghero';
import { Link } from 'react-router-dom';
import Testimonials from '../components/common/Testimonials';

function Home() {

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className='section-1'>
                    <div className="hero d-flex flex-column justify-content-center align-items-center ">

                        <div className="container-fluid">
                            <div className="text-center">
                                <span data-aos="fade-up"
                                    data-aos-delay="200" >WELCOME AMASING CONSTRUCTION</span>
                                <h1 className=''>Crafting dreams with <br /> precision and excellence</h1>
                                <p className=''>We are the best construction company in Egypt We are the best construction company in Egypt  </p>
                                <div

                                    className="mt-4">

                                    <Link data-aos="fade-right"
                                        data-aos-delay="400" className='btn btn-primary large'
                                        to='contact_us'>Contact Now</Link>
                                    <Link
                                        data-aos="fade-left"
                                        data-aos-delay="400"
                                        className='btn btn-secondary ms-4'
                                        to='/project'

                                    >View Projects</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* About Us Section  */}
                <Abouthero />
                {/* Our Services section  */}
                <Servicehero />
                {/* Why choose Us  */}
                <section className='section-4 py-4'>
                    <div className="container">
                        <div className="section-header text-center">
                            <h2 data-aos="fade-up"
                                data-aos-delay="400">Why Choose Us</h2>
                            <h3 data-aos="fade-left"
                                data-aos-delay="400">Discover our wide varity of project</h3>
                            <p data-aos="fade-right"
                                data-aos-delay="400"> The construction industry is a major driver of economic growth</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4 my-4">
                                    <div className="card-icon">
                                        <img src={CardIcon2} alt="icon-2" />
                                    </div>
                                    <div className="card-title">
                                        Superior Craftsmanship
                                    </div>
                                    <div>
                                        <p>Roads, bridges, airports, and public transportation systems are all products of construction. These structures facilitate trade, communication,</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4 my-4">
                                    <div className="card-icon">
                                        <img src={CardIcon3} alt="icon-3" />
                                    </div>
                                    <div className="card-title">
                                        Knowlage and Expertise

                                    </div>
                                    <div>
                                        <p>Roads, bridges, airports, and public transportation systems are all products of construction. These structures facilitate trade, communication,</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0 p-4 my-4">
                                    <div className="card-icon">
                                        <img src={CardIcon1} alt="icon-1" />
                                    </div>
                                    <div className="card-title">
                                        Cuting-Edg-Solution
                                    </div>
                                    <div>
                                        <p>Roads, bridges, airports, and public transportation systems are all products of construction. These structures facilitate trade, communication,</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                {/* Our Project section  */}
                <Projecthero />
                {/* Testimonials */}
                <Testimonials />

                {/* Blog & News */}
                <Bloghero />

            </main>
            <Footer />

        </>
    )
}

export default Home
