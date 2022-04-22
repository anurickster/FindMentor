import React from 'react';
import './module.StudentLandpage.css';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footerpage/Footer';
import MentorCards from '../MentorCards/MentorCards';

const StudentLandpage = () => {
  return (
    <>
      <Navigationbar />
      <MentorCards />
    </>
  );
};

export default StudentLandpage;
