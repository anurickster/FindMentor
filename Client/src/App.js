import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Loginpage from "./Components/Loginpage/Loginpage";
import Contactpage from "./Components/Contactpage/Contactpage";
import Service from "./Components/Servicepage/Service";
import Signuppage from "./Components/Signuppage/Signuppage";
import SessionManager from "./addons/SessionManager";
import MentorProfilepage from "./Components/MentorProfilepage/MentorProfilepage";
import ApplyToMentorpage from "./Components/ApplyToMentorpage/ApplyToMentorpage";
import MentorWelcomepage from "./Components/MentorWelcomePage/MentorWelcomepage";
import AddCoursepage from "./Components/AddCoursepage/AddCoursepage";
import ViewCoursespage from "./Components/ViewCoursespage/ViewCoursespage";
import CourseDetailspage from "./Components/CourseDetailspage/CourseDetailspage";
import StudentLandpage from "./Components/StudentLandpage/StudentLandpage";
import Footer from "./Components/Footerpage/Footer";
import ScrollToTop from "./addons/ScrollToTop";

function App() {
  return (
    <>
      <SessionManager />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Signuppage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/welcomepage" element={<MentorWelcomepage />} />
            <Route path="/addcourse" element={<AddCoursepage />} />
            <Route path="/viewcourses" element={<ViewCoursespage />} />
            <Route path="/coursedetails" element={<CourseDetailspage />} />
            <Route path="/coursedetails/:id" element={<CourseDetailspage />} />
            <Route path="/homepage" element={<StudentLandpage />} />
            <Route path="/mentorprofile" element={<MentorProfilepage />} />
            <Route path="/mentorprofile/:id" element={<MentorProfilepage />} />
            <Route path="/applytomentor" element={<ApplyToMentorpage />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

function PrivateRoute() {
  const authStatus = localStorage.getItem("auth");
  return <div>{authStatus === "true" ? <Outlet /> : <Navigate to="/" />}</div>;
}
