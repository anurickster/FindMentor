import React from 'react';
import './Aboutpage.css';
import web from '../Aboutpage/images/img1.png';
import Navigationbar from '../Navigationbar/Navigationbar';

const Aboutpage = () => {
  return (
    <>
      <Navigationbar />
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid '>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    Grow Your Knowledge with
                    <strong className='brand-name ps-2'>FindMentor.com </strong>
                  </h1>
                  <h2 className='my-3 '>
                    FindMentor Hiring will help you connect with the skills of
                    developers in our community who are actively looking for
                    work.
                  </h2>
                  <div className='mt-3'>
                    <a href='/contact' className='btn-get-started'>
                      Get started
                    </a>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2  ps-5 header-img pb-5'>
                  <img
                    src={web}
                    className='img-fluid animated'
                    alt='home img'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutpage;
