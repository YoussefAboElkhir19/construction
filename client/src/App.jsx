import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import './assets/css/style.scss';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact_us from './pages/Contact_us';
import Login from './components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './components/backend/Dashbord';
import RequireAuth from './components/common/RequireAuth';
// import Services Routes 
import { default as ShowServices } from './components/backend/services/Show';
import { default as CreateService } from './components/backend/services/Create';
import { default as EditService } from './components/backend/services/Edit';
// import Projects Routes 
import { default as ShowProjects } from './components/backend/projects/Show';
import { default as CreateProject } from './components/backend/projects/Create';
import { default as EditProject } from './components/backend/projects/Edit';
// import Articles Routes 
import { default as ShowArticle } from './components/backend/articles/Show';
import { default as CreateArticle } from './components/backend/articles/Create';
import { default as EditArticle } from './components/backend/articles/Edit';
// import Testimonail Routes 
import { default as ShowTestimonail } from './components/backend/Testimonails/Show';
import { default as CreateTestimonail } from './components/backend/Testimonails/Create';
import { default as EditTestimonail } from './components/backend/Testimonails/Edit';
// Animation on scroll
import AOS from "aos";
import 'aos/dist/aos.css';
import ServiceDetails from './pages/ServiceDetails';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/project' element={<Project />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact_us' element={<Contact_us />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/service/:id' element={<ServiceDetails />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          {/* // Route for admin panel */}
          <Route path='/admin/dashbord' element={<RequireAuth> <Dashbord /> </RequireAuth>}
          />
          {/* Route Services  */}
          <Route path='/admin/services' element={<RequireAuth> <ShowServices />
          </RequireAuth>} />
          <Route path='/admin/services/create' element={<RequireAuth> <CreateService />
          </RequireAuth>} />
          <Route path='/admin/services/edit/:id' element={<RequireAuth> <EditService />
          </RequireAuth>} />
          {/* Route Projects  */}
          <Route path='/admin/projects' element={<RequireAuth> <ShowProjects />
          </RequireAuth>} />
          <Route path='/admin/projects/create' element={<RequireAuth> <CreateProject />
          </RequireAuth>} />
          <Route path='/admin/projects/edit/:id' element={<RequireAuth> <EditProject />
          </RequireAuth>} />
          {/* Route Articles  */}
          <Route path='/admin/articles' element={<RequireAuth> <ShowArticle />
          </RequireAuth>} />
          <Route path='/admin/articles/create' element={<RequireAuth> <CreateArticle />
          </RequireAuth>} />
          <Route path='/admin/articles/edit/:id' element={<RequireAuth> <EditArticle />
          </RequireAuth>} />
          {/* Route Testimonail  */}
          <Route path='/admin/testimonals' element={<RequireAuth> <ShowTestimonail />
          </RequireAuth>} />
          <Route path='/admin/testimonals/create' element={<RequireAuth> <CreateTestimonail />
          </RequireAuth>} />
          <Route path='/admin/testimonals/edit/:id' element={<RequireAuth> <EditTestimonail />
          </RequireAuth>} />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
      />


    </>
  )
}

export default App
