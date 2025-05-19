import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import SideBar from '../common/SideBar'

const Dashbord = () => {
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
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h4>Dashbord</h4>

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

export default Dashbord
