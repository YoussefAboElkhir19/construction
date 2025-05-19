import React, { useEffect, useState } from 'react'
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CardIcon1 from '../assets/images/icon-1.svg';
import CardIcon2 from '../assets/images/icon-2.svg';
import CardIcon3 from '../assets/images/icon-3.svg';
import AvatarImage from '../assets/images/author-2.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Abouthero from '../components/common/Abouthero';
import Servicehero from '../components/common/Servicehero';
import Projecthero from '../components/common/Projecthero';
import Bloghero from '../components/common/Bloghero';
import { Link } from 'react-router-dom';

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
                            <span data-aos="fade-up"
                                data-aos-delay="400">Why Choose Us</span>
                            <h2 data-aos="fade-left"
                                data-aos-delay="400">Discover our wide varity of project</h2>
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
                <section className='section-5 py-4'>
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p> The construction industry is a major driver of economic growth</p>
                        </div>

                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}

                        >
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating d-flex gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        </div>
                                        <div className="content pt-4">
                                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere iusto cupiditate fuga dolorum assumenda tempora modi enim cumque excepturi? Quos, voluptatem! Quisquam sed quos, cupiditate facere ut obcaecati veniam?</p>

                                        </div>
                                        <hr />
                                        <div className="meta d-flex gap-4">
                                            <div>

                                                <img src={AvatarImage} alt="author" width={50} />
                                            </div>
                                            <div>

                                                <div className="name">Ali Ali</div>
                                                <div className="">CEO</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating d-flex gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        </div>
                                        <div className="content pt-4">
                                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere iusto cupiditate fuga dolorum assumenda tempora modi enim cumque excepturi? Quos, voluptatem! Quisquam sed quos, cupiditate facere ut obcaecati veniam?</p>

                                        </div>
                                        <hr />
                                        <div className="meta d-flex gap-4">
                                            <div>

                                                <img src={AvatarImage} alt="author" width={50} />
                                            </div>
                                            <div>

                                                <div className="name">Ali Ali</div>
                                                <div className="">CEO</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating d-flex gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        </div>
                                        <div className="content pt-4">
                                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere iusto cupiditate fuga dolorum assumenda tempora modi enim cumque excepturi? Quos, voluptatem! Quisquam sed quos, cupiditate facere ut obcaecati veniam?</p>

                                        </div>
                                        <hr />
                                        <div className="meta d-flex gap-4">
                                            <div>

                                                <img src={AvatarImage} alt="author" width={50} />
                                            </div>
                                            <div>

                                                <div className="name">Ali Ali</div>
                                                <div className="">CEO</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating d-flex gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        </div>
                                        <div className="content pt-4">
                                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere iusto cupiditate fuga dolorum assumenda tempora modi enim cumque excepturi? Quos, voluptatem! Quisquam sed quos, cupiditate facere ut obcaecati veniam?</p>

                                        </div>
                                        <hr />
                                        <div className="meta d-flex gap-4">
                                            <div>

                                                <img src={AvatarImage} alt="author" width={50} />
                                            </div>
                                            <div>

                                                <div className="name">Ali Ali</div>
                                                <div className="">CEO</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="rating d-flex gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>

                                        </div>
                                        <div className="content pt-4">
                                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, facere iusto cupiditate fuga dolorum assumenda tempora modi enim cumque excepturi? Quos, voluptatem! Quisquam sed quos, cupiditate facere ut obcaecati veniam?</p>

                                        </div>
                                        <hr />
                                        <div className="meta d-flex gap-4">
                                            <div>

                                                <img src={AvatarImage} alt="author" width={50} />
                                            </div>
                                            <div>

                                                <div className="name">Ali Ali</div>
                                                <div className="">CEO</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>

                </section>
                {/* Blog & News */}
                <Bloghero />

            </main>
            <Footer />

        </>
    )
}

export default Home
