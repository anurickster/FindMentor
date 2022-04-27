import React, { useEffect, useState } from 'react';
import './module.MentorCard.css';
import axios from 'axios';
import Img1 from '../Images/1.jpg';
import Img2 from '../Images/2.jpg';
import Img3 from '../Images/3.jpg';
import Img4 from '../Images/4.jpg';
import Img5 from '../Images/5.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const MentorCards = () => {
  const [mentors, setMentors] = useState(['']);
  const [coursesList, setCoursesList] = useState(['']);
  const ImgArray = [Img1, Img2, Img3, Img4, Img5];
  const [moreOptions, setMoreOptions] = useState(0); //for more options
  const [usertype, setUsertype] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:9000/mentors/')
      .then((res) => {
        console.log(res.data);
        setMentors(res.data);
        console.log(mentors);
      })
      .catch((err) => {
        console.log(err);
      });

    //////// i think this is not needed //////////////
    // axios
    //   .get('http://localhost:9000/courses')
    //   .then((res) => {
    //     console.log(res.data);
    //     setCoursesList(res.data);
    //     console.log(coursesList);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // } else {
    // window.location.href = "/";
    // }
  }, []);

  // all mentors data by url
  const mentorDataresponse = axios.get('http://localhost:9000/mentors');
  console.log(mentorDataresponse);
  const ShowMoreOptions = (event, id) => {
    event.preventDefault();
    if (moreOptions === id) {
      setMoreOptions(null);
    } else {
      setMoreOptions(id);
    }
  };

  const DeleteMentor = async (event, id) => {
    event.preventDefault();
    await axios.delete(`http://localhost:9000/mentors/${id}`);
    setMentors(mentors.filter((mentor) => mentor.id !== id));
  };
  // console.log(userId);

  const viewMentorDetails = (event, id) => {
    event.preventDefault();
    window.location.href = `/mentorprofile/`;
    // window.location.href = `/mentorprofile/${id}`;
  };
  const viewCourseDetails = (event, id) => {
    event.preventDefault();
    console.log(id);
    window.location.href = `/coursedetails/${id}`;
    // window.location.href = `/courseprofile/${id}`;
  };

  return (
    <div className='Home'>
      <div className='Cards_Container'>
        {mentors ? (
          mentors?.map((mentor, i) => {
            console.log(mentor);
            return (
              <div key={i + 'men'} className='MentorsCard'>
                <div className='leftSection'>
                  <h3 className='Mentor__NameSec'>
                    <p> {mentor.mUserid?.name}</p>
                    <span onBlur={() => setMoreOptions(null)}>
                      {mentor.linkedin ? (
                        <a
                          href={mentor.linkedin}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <LinkedInIcon className='Linkedin__Icon' />
                        </a>
                      ) : null}
                      {mentor.github ? (
                        <a
                          href={mentor.github}
                          target='_blank'
                          rel='noreferrer'
                        >
                          <GitHubIcon className='Github__Icon' />
                        </a>
                      ) : null}
                      {/* {usertype === "mentor" && userId == mentor.id ? ( */}
                      <>
                        <MoreVertIcon
                          className='More__Icon'
                          onClick={(e) => ShowMoreOptions(e, mentor.id)}
                        />
                        <ul
                          className={
                            moreOptions === mentor.id
                              ? 'Show MoreOptions'
                              : 'MoreOptions'
                          }
                        >
                          <Link to={`/mentor/${mentor.id}`} exact='true'>
                            <li>Edit</li>
                          </Link>
                          <li onClick={(e) => DeleteMentor(e, mentor.id)}>
                            Delete
                          </li>
                        </ul>
                      </>
                      {/* ) : null} */}
                    </span>
                  </h3>
                  <div className='Mentors__Rating'>
                    Rating:
                    <Rating
                      className='Rating'
                      name='half-rating'
                      value={Math.ceil(Math.random() * 5)}
                      precision={0.2}
                      size='small'
                      controlled='true'
                    />
                    <p>{} </p>
                  </div>
                  <p> Experience : {mentor.mExp} Years</p>

                  <p>Skills:</p>
                  <ul className='mentorskills'>
                    {mentor.mSkills
                      ? mentor.mSkills.map((skill, id) => {
                          return (
                            <li key={id} className='skills'>
                              {skill}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                  <p>Courses:</p>
                  <ul className='mentorCourses'>
                    {mentor.courses
                      ? mentor.courses.map((course, id) => {
                          return (
                            <li className='Course' key={id}>
                              {course}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
                <div className='rightSection'>
                  <img
                    src={ImgArray[Math.floor(Math.random() * 5)]}
                    alt='mentorCourse'
                  />
                  <p>inventore laudantium exercitationem, magni ab!</p>
                  <Link
                    className='BTN ViewDetails '
                    // to={`/mentorprofile`}
                    to={`/mentorprofile/${mentor.mUserid?._id}`}
                    exact='true'
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <h3>No Mentors Present add some </h3>
        )}
      </div>
    </div>
  );
};

export default MentorCards;
