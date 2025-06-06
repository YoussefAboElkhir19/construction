import React from 'react'

const Hero = ({ preheading, heading, text }) => {
    return (
        <section className='section-7'>
            <div className="hero d-flex flex-column justify-content-center align-items-center ">

                <div className="container">
                    <div className="text-left">
                        <span>{preheading}</span>
                        <h1 className=''>{heading}</h1>
                        <p dangerouslySetInnerHTML={{ __html: text }} ></p>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Hero
