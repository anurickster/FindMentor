import React from 'react';
import './moudule.MentorProfilepage.css';
import { useNavigate } from 'react-router-dom';
import MentorImg from './mentorImg.jpg';
import course from './courses.png';
import ViewCoursespage from '../ViewCoursespage/ViewCoursespage';
import Navigationbar from '../Navigationbar/Navigationbar';
// import FacebookIcon from "@mui/icons-material/Facebook";

const MentorProfilepage = () => {
  const navigate = useNavigate();
  const applyToMentor = () => {
    navigate('/applytomentor');
  };

  const Skills = [
    'Java',
    'Python',
    'C++',
    'C#',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Express',
    'Angular',
    'Bootstrap',
    'HTML',
    'CSS',
    'SQL',
    'php',
    'jquery',
  ];

  return (
    <>
      <Navigationbar />
      <div className='Mentor__Profile__Page__Container'>
        <div className='Top__Section'>
          <div className='Img__div'>
            <img src={MentorImg} alt='mentor Img'></img>
          </div>
          <div className='Details__div'>
            <h1>Mohit Gandhewar</h1>
            <h4>Professional Programmer and Educator </h4>
            <h5>CodewithAbdulBari.com </h5>
            <h5> CodeWithAbdulBari</h5>
            <a href='linkedin.com/in/abdul-bari-a-b8a9b8a9'>linkedIn</a>

            {/* <FacebookIcon /> */}
          </div>
        </div>
        <div className='Middle__Section'>
          <div className='Discription__div'>
            <div className='Discription'>
              <h3>About Me</h3>
              <p>
                Having over 20 years of experience in the computer science and
                information technology fields. Taught many courses at the
                University level to thousands of students.<br></br>
                Have been training students and employees on various programming
                languages like, C++ , VC++ , JAVA technologies and Web
                Development.<br></br>
                Have Delivered Seminars on various topics like Distributed
                System, Cloud Computing and Big Data<br></br>
                Have been into web development using technologies like, Java,
                ASP.NET and PHP.<br></br>
                Running a Youtube Channel on “Algorithms” , which has help many
                university students in their academics.
              </p>
            </div>
            <div className='Skills'>
              <h3>Skills</h3>
              <div className='skills__list'>
                {Skills.map((skill) => (
                  <div className='Skill__div'>
                    <p className='Skills__badge'>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='Reviews'>
              <h3>Reviews</h3>
              <div className='Reviews__div'>
                <p> Reviews :45730</p>
                <p>Rating :4.5</p>
                <p>students :540700</p>
              </div>
            </div>
          </div>
          <div className='Card__div'>
            <div className='Card__div__inner'>
              <p>Price : 1499 INR/month</p>
              <p>All courses</p>
              <p>Duration : 1 Month</p>
              <img src={course} alt='' />
              <button className='btn Apply__Mentor' onClick={applyToMentor}>
                Apply to Mentor
              </button>
            </div>
          </div>
        </div>
        <div className='Bottom__Section'>
          <h3>Courses</h3>
          <br />
          <ViewCoursespage />
        </div>
      </div>
    </>
  );
};

export default MentorProfilepage;
