import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Mentor from './Components/Mentor/Mentor';
import Aboutpage from './Components/Aboutpage/Aboutpage';
import Loginpage from './Components/Loginpage/Loginpage';
import Contactpage from './Components/Contactpage/Contactpage';
import Service from './Components/Servicepage/Service';
import Signuppage from './Components/Signuppage/Signuppage';
import SessionManager from './addons/SessionManager';
import MentorProfilepage from './Components/MentorProfilepage/MentorProfilepage';
import ApplyToMentorpage from './Components/ApplyToMentorpage/ApplyToMentorpage';
import MentorWelcomepage from './Components/MentorWelcomePage/MentorWelcomepage';
import MentorSelfProfilepage from './Components/MentorSelfProfilepage/MentorSelfProfilepage';
import AddCoursepage from './Components/AddCoursepage/AddCoursepage';
import ViewCoursespage from './Components/ViewCoursespage/ViewCoursespage';
import CourseDetailspage from './Components/CourseDetailspage/CourseDetailspage';
import StudentLandpage from './Components/StudentLandpage/StudentLandpage';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Footer from './Components/Footerpage/Footer';

const PublicPages = () => {
  const publicRoutes = useRoutes([
    { path: '/', element: <Loginpage /> },
    { path: '/register', element: <Signuppage /> },
    { path: '/about', element: <Aboutpage /> },
    { path: '/service', element: <Service /> },
    { path: '/contact', element: <Contactpage /> },
  ]);

  return publicRoutes;
};

const PrivatePages = () => {
  const privateRoutes = useRoutes([
    { path: '/welcomepage', element: <MentorWelcomepage /> },
    { path: '/addcourse', element: <AddCoursepage /> },
    { path: '/viewcourses', element: <ViewCoursespage /> },
    { path: '/coursedetails', element: <CourseDetailspage /> },
    { path: '/coursedetails/:id', element: <CourseDetailspage /> },
    { path: '/mentorselfprofile', element: <MentorSelfProfilepage /> },
    { path: '/homepage', element: <StudentLandpage /> },
    { path: '/adminhome', element: <Homepage /> },
    { path: '/mentorprofile', element: <MentorProfilepage /> },
    { path: '/applytomentor', element: <ApplyToMentorpage /> },
    { path: '/addmentor', element: <Mentor /> },
    { path: '/addmentor/:id', element: <Mentor /> },
  ]);

  return privateRoutes;
};

function App() {
  return (
    <>
      <SessionManager></SessionManager>
      <Router>
        <Navigationbar />
        <PublicPages />
        {/* <PrivateRoute /> */}
        <PrivatePages/>
        <Footer />
      </Router>
    </>
  );
}

export default App;

function PrivateRoute() {
  const authStatus = localStorage.getItem('auth');
  return (
    <div>{authStatus === 'true' ? <PrivatePages /> : <Navigate to='/' />}</div>
  );
}
