import React, { useEffect, useState } from 'react';
import './moudule.MentorProfilepage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import course from './courses.png';
import ViewCoursespage from '../ViewCoursespage/ViewCoursespage';
import Navigationbar from '../Navigationbar/Navigationbar';
import tokenDecoder from '../../addons/tokenDecoder';
import AddMentorDetails from '../AddMentorDetails/AddMentorDetails';
import { fetchPost } from '../../store/post-reducer';

const MentorProfilepage = () => {
  const { id } = useParams();
  const dTokendata = tokenDecoder().id;

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const applyToMentor = () => {
    navigate('/applytomentor');
  };

  const mentorProfile = useSelector((state) => {
    return state.postReducer.post;
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    } else {
      dispatch(fetchPost(dTokendata));
    }
  }, [dispatch, id, dTokendata]);

  useEffect(() => {
    if (
      !mentorProfile?.mAbout &&
      !mentorProfile?.mOcc &&
      mentorProfile?.mSkills?.length === 0
    ) {
      setShow(true);
    }
  }, [mentorProfile]);

  return (
    <>
      <Navigationbar />
      <div>{show && <AddMentorDetails setShowC={setShow} showC={show} />}</div>
      {!show && (
        <div className='Mentor__Profile__Page__Container'>
          <div className='Top__Section'>
            <div className='Img__div'>
              <img src={mentorProfile?.imgUrl} alt='mentor Img'></img>
            </div>
            <div className='Details__div'>
              <h1>{mentorProfile?.mUserid?.name}</h1>
              <h4>{mentorProfile?.mOcc}</h4>
              <h5>{mentorProfile?.mWebsite}</h5>
              <h5> {mentorProfile?.mYTch}</h5>
              <a href='linkedin.com/in/abdul-bari-a-b8a9b8a9'>linkedIn</a>

              {/* <FacebookIcon /> */}
            </div>
          </div>
          <div className='Middle__Section'>
            <div className='Discription__div'>
              <div className='Discription'>
                <h3>About Me</h3>
                <p>{mentorProfile?.mAbout}</p>
              </div>
              <div className='Skills'>
                <h3>Skills</h3>
                <div className='skills__list'>
                  {mentorProfile?.mSkills?.map((skill, i) => (
                    <div key={'id' + i} className='Skill__div'>
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
      )}
    </>
  );
};

export default MentorProfilepage;
