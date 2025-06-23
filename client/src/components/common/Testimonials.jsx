import { useEffect, useState } from 'react'
import { apiUrl, fileUrl } from './http';
import 'swiper/css/autoplay'; // Import autoplay styles (optional, but recommended)
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';

function Testimonials() {
    const [testimonials, settestimonials] = useState([]);
    const fetchLast = async () => {
        const res = await fetch(apiUrl + 'get-last-testimonials?limit=6', {
            'method': 'GET',

        });
        const result = await res.json();
        // console.log(result);
        settestimonials(result.data);


    }
    useEffect(() => {
        fetchLast();
    }, [])
    return (
        <>
            <section className='section-5 py-4'>
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Testimonials</h2>
                        <h3>What people are saying about us</h3>
                        <p> The construction industry is a major driver of economic growth</p>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}

                    >
                        {
                            testimonials && testimonials.map(testimonial => {
                                return (

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
                                                    <p>{testimonial.testimonal}</p>

                                                </div>
                                                <hr />
                                                <div className="meta d-flex gap-4">
                                                    {/* image */}
                                                    <div className="service-image">
                                                        <img src={`${fileUrl}upload/testimonals/small/${testimonial.image}`} alt='testimonial image' width={50} />

                                                    </div>
                                                    <div>

                                                        <div className="name">{testimonial.citation}</div>
                                                        <div className="">{testimonial.designation}</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                );
                            }

                            )
                        }


                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default Testimonials
