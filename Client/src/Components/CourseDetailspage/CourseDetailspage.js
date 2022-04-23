import React, { useEffect, useState } from 'react';
import './module.CourseDetailspage.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Navigationbar from '../../Components/Navigationbar/Navigationbar';

const CourseDetailspage = () => {
  const [course, setCourse] = useState({});

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:9000/courses/${id}`).then((res) => {
        console.log(res.data);
        setCourse(res.data);
      });
    }
  }, [id]);

  return (
    <>
      <Navigationbar />
      <div className='Course_details_container'>
        <div className='Course_details_container_left'>
          <div className='courseDetails_Heading'>
            <h1>{course.course_title}</h1>
            <div className='flexRow'>
              <Rating
                className='Rating'
                name='half-rating'
                value={Math.ceil(Math.random() * 5)}
                precision={0.2}
                size='large'
                color='secondary'
                controlled='true'
              />
              <p className='Reviews'>
                ( {Math.ceil(Math.random() * 500 + 500)} Reviews )
              </p>
            </div>
            <p className='Mentor_Name'>
              Created by:{' '}
              <Link className='ViewDetails ' to={`/mentorprofile`} exact='true'>
                {course.mentor_name}
              </Link>
            </p>
          </div>
          {/* <div>{course.lectures} </div>
          <div>{course.course_duration}</div> */}
          {/* <div>{course.students} students enrolled already</div> */}
          <div className='no_of_students'>
            {Math.ceil(Math.random() * 2000 + 2000)} students enrolled already
          </div>
          <div>{course.discription}</div>
          <p>Course is for</p>
          <ul className='Course_Is_for flexRow'>
            {course.level
              ? course.level.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })
              : ''}
          </ul>
        </div>
        <div className='Course_details_container_right'>
          <div className='Course_details_container_right_Img'>
            <h4>{course.price}</h4>
          </div>
          <div className='Course_details_container_right_details'></div>
        </div>
      </div>

      <div className='course_Topics_container'>
        <h3 className='sec_Heading'>What you will learn</h3>
        <ul className='course_content_container flexRow'>
          <li> {course.course_duration} Hours of Videos</li>
          <li> {course.lectures} Lectures</li>
          <li> Assignments on each topic</li>
        </ul>
        <div>
          <h3 className='sec_Heading'> Topics covered</h3>
          <ul>
            {course.course_content
              ? course.course_content.map((item, i) => {
                  return (
                    <li className='Topics' key={i}>
                      {item}
                    </li>
                  );
                })
              : ''}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CourseDetailspage;
