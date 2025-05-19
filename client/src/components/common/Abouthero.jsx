import React from 'react';
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {

    return (
        <section className="section-2 py-5">
            <div className="container py-5">
                <div className="row">
                    {/* Image Section with Animation */}
                    <div
                        className="col-md-6"

                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <img src={AboutImg} className="w-100" alt="about-us" />
                    </div>

                    {/* Text Section with Animation */}
                    <div
                        className="col-md-6"
                        data-aos="fade-left"
                        data-aos-delay="400"
                    >
                        <span>About Us</span>
                        <h2>Crafting structures that last a lifetime</h2>
                        <p>
                            Construction is the backbone of modern infrastructure. Roads, bridges,
                            airports, and public transportation systems are all products of
                            construction. These structures facilitate trade, communication, and
                            mobility, enabling economic growth and improving the quality of life for
                            millions of people.
                            <br />
                            The construction industry is a major driver of economic growth. It
                            creates jobs, stimulates demand for raw materials, and contributes to
                            the development of other sectors, such as manufacturing and technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
