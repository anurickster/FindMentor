import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Learning from './Learning.png';
import { useNavigate, useParams } from 'react-router-dom';
import MultipleInput from './MultipleInput';
import './module.AddCoursepage.css';
import Navigationbar from '../Navigationbar/Navigationbar';

const AddCoursepage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [courseDetails, setCourseDetails] = useState({
    course_title: null,
    course_duration: null,
    lectures: '',
    level: [],
    description: '',
    course_content: [],
    students: 0,
    mentor_ref_id: '625c9dabcf39600b621e2c7c',
    price: '',
    course_image: '',
  });
  console.log(courseDetails);

  const [addedlevel, setAddedlevel] = useState([]);
  // console.log(addedlevel);
  const [addedcourse_content, setAddedcourse_content] = useState([]);

  useEffect(() => {
    if (id) {
      loadMentor();
      addedlevel.push(...courseDetails.level);
      setAddedlevel(courseDetails.level);
      setCourseDetails({ mname: localStorage.getItem('userName') });
    }
  }, []);
  // console.log(courseDetails.course_title);
  // console.log(addedlevel);

  const changeHandler = (e) => {
    setCourseDetails({ ...courseDetails, [e.target.name]: e.target.value });
  };

  const loadMentor = async () => {
    const result = await axios.get(`http://localhost:7000/mentors/${id}`);
    console.log(result.data);
    setCourseDetails(result.data);
  };

  const handleSubmit = async (e) => {
    console.log(courseDetails);
    e.preventDefault();
    return (
      courseDetails.level.push(...addedlevel),
      courseDetails.course_content.push(...addedcourse_content),
      await axios
        .post('http://localhost:9000/courses', courseDetails)

        .then((res) => {
          console.log(res.data);
          // if (res.status === 200) navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  const updateMentor = async (index, e) => {
    e.preventDefault();
    return (
      courseDetails.level.push(...addedlevel),
      courseDetails.course_content.push(...addedcourse_content),
      await axios
        .put(`http://localhost:7000/mentors/${index}`, courseDetails)
        .then((res) => {
          console.log(res.data);
          if (res.status === 200) navigate('/home');
          id = null;
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  return (
    <>
      <Navigationbar />
      <div className='Services'>
        <div>
          <img src={Learning} alt='Learning' className='MentorFormImage' />
        </div>
        <div>
          <form className='Mentor_Form'>
            <h2 className='Form_Heading'>
              Join Us for creating a better <br></br> Learning Experience.
            </h2>
            <div>
              <input
                type='text'
                name='course_title'
                placeholder='Course Name'
                value={courseDetails.course_title}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='number'
                name='course_duration'
                placeholder='Course Duration in Hours'
                value={courseDetails.course_duration}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='number'
                name='lectures'
                placeholder='Total number of lectures'
                value={courseDetails.lectures || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <textarea
                type='text'
                name='description'
                placeholder='Add description'
                value={courseDetails.description || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='number'
                name='price'
                placeholder='Add Price'
                value={courseDetails.price || ''}
                onChange={changeHandler}
              />
            </div>
            <MultipleInput
              Array={addedlevel}
              SetArray={setAddedlevel}
              placeholder={'Add level'}
              className='mt-2'
            />
            <MultipleInput
              Array={addedcourse_content}
              SetArray={setAddedcourse_content}
              placeholder={'Add course_content'}
            />
            {/* <div>
              <input
                type="file"
                name="course_image"
                placeholder="Upload Course Image"
                value={courseDetails.course_image || ""}
                onChange={changeHandler}
              />
            </div> */}

            <button
              className='Submit BTN '
              onClick={id ? (e) => updateMentor(id, e) : (e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCoursepage;
