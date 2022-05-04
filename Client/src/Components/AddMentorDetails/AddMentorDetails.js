import React, { useState } from 'react';
import tokenDecoder from '../../addons/tokenDecoder';
import { useDispatch } from 'react-redux';
import MultipleInput from '../../addons/MultipleInput';
import Learning from '../Images/Learning.png';
import { updatePost } from '../../store/post-reducer';

const AddMentorDetails = (p) => {
  const dTokendata = tokenDecoder().id;
  const dispatch = useDispatch();

  const [mentorDetails, setMentorDetails] = useState({
    mOcc: '',
    mAbout: '',
    mSkills: [],
    imgUrl: '',
    mExp: '',
    mWebsite: '',
    mGithub: '',
    mLinkedin: '',
    mYTch: '',
  });
  console.log(mentorDetails);

  const [addedmSkills, setAddedmSkills] = useState([]);

  const changeHandler = (e) => {
    setMentorDetails({ ...mentorDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    p.setShowC(false);
    return (
      mentorDetails.mSkills.push(...addedmSkills),
      dispatch(updatePost(dTokendata, mentorDetails))
    );
  };

  return (
    <>
      <div className='Services'>
        <div>
          <img src={Learning} alt='Learning' className='MentorFormImage' />
        </div>
        <div>
          <form className='Mentor_Form'>
            <h2 className='Form_Heading'>
              Add more Details <span></span>
              will be displayed on your profile
            </h2>
            <div>
              <input
                type='text'
                name='mOcc'
                placeholder='Occupation'
                value={mentorDetails.mOcc}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='text'
                name='imgUrl'
                placeholder='Profile Image URL'
                value={mentorDetails.imgUrl}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='number'
                name='mExp'
                placeholder='Total years of experience'
                value={mentorDetails.mExp || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <textarea
                type='text'
                name='mAbout'
                placeholder='About you'
                value={mentorDetails.mAbout || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='text'
                name='mWebsite'
                placeholder='Your Website'
                value={mentorDetails.mWebsite || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='text'
                name='mGithub'
                placeholder='Github Profile URL'
                value={mentorDetails.mGithub || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='text'
                name='mLinkedin'
                placeholder='Linkedin Profile URL'
                value={mentorDetails.mLinkedin || ''}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type='text'
                name='mYTch'
                placeholder='Youtube Channel'
                value={mentorDetails.mYTch || ''}
                onChange={changeHandler}
              />
            </div>
            <MultipleInput
              Array={addedmSkills}
              SetArray={setAddedmSkills}
              placeholder={'Add skills'}
              className='mt-2'
            />

            <button className='Submit BTN ' onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMentorDetails;
