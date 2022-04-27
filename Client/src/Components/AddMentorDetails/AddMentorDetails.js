import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tokenDecoder from "../../addons/tokenDecoder";
import Navigationbar from "../Navigationbar/Navigationbar";
import MultipleInput from "../../addons/MultipleInput";
import Learning from "../Images/Learning.png";
import axios from "axios";
import { logout } from "../../store/auth-reducer";

const AddMentorDetails = (p) => {
  const navigate = useNavigate();

  const { id } = useParams();

  let dTokendata = tokenDecoder().id;

  console.log(p," p props");

  // const saveMuserId = async () => {
  //   await axios.post(`http://localhost:9000/mentors/`, { mUserid: dTokendata });
  // };




  console.log(dTokendata, "dTokendata");
  const [mentorName, setMentorName] = useState("");

  const [mentorDetails, setMentorDetails] = useState({
    // mUserid: dTokendata ? dTokendata : "",
    mOcc: "",
    mAbout: "",
    mSkills: [],
    imgUrl: "",
    mExp: "",
    mWebsite: "",
    mGithub: "",
    mLinkedin: "",
    mYTch: "",
  });
  console.log(mentorDetails);

  const [addedmSkills, setAddedmSkills] = useState([]);


  useEffect(() => {
    // saveMuserId();
    // axios.get(`http://localhost:9000/mentors/${dTokendata}`).then((res) => {
    //   console.log(res.data?.mUserid?.name);
    //   if (res.data?.mUserid?.name) {
    //     setMentorName(res.data.mUserid?.name);
    //   }
    // });
    // if (id) {
    //   loadMentor();
    //   addedmSkills.push(...mentorDetails.level);
    //   setAddedmSkills(mentorDetails.level);
    // }
  }, []);

  const changeHandler = (e) => {
    setMentorDetails({ ...mentorDetails, [e.target.name]: e.target.value });
  };



  const loadMentor = async () => {
    const result = await axios.get(
      `http://localhost:9000/mentors/${dTokendata}`
    );
    console.log(result.data);
    setMentorDetails(result.data);
  };

  const handleSubmit = async (e) => {
    console.log(mentorDetails);
    e.preventDefault();
    return (
      mentorDetails.mSkills.push(...addedmSkills),
      await axios
        .patch("http://localhost:9000/mentors/"+ dTokendata, mentorDetails)

        .then((res) => {
          console.log(res.data);
          // formVisibility(false);
          p.setShowC(false);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  //   const updateMentor = async (index, e) => {
  //     e.preventDefault();
  //     return (
  //       mentorDetails.mSkills.push(...addedmSkills),
  //       await axios
  //         .put(`http://localhost:9000/mentors/${index}`, mentorDetails)
  //         .then((res) => {
  //           console.log(res.data);
  //           id = null;
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         })
  //     );
  //   };

  return (
    <>
      <div 
        className="Services" >
        <div>
          <img src={Learning} alt="Learning" className="MentorFormImage" />
        </div>
        <div>
          <form className="Mentor_Form">
            <h2 className="Form_Heading">
              Add more Details <span></span>
              will be displayed on your profile
            </h2>
            {/* <h4>{mentorName}</h4> */}
            <div>
              <input
                type="text"
                name="mOcc"
                placeholder="Occupation"
                value={mentorDetails.mOcc}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="imgUrl"
                placeholder="Profile Image URL"
                value={mentorDetails.imgUrl}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="number"
                name="mExp"
                placeholder="Total years of experience"
                value={mentorDetails.mExp || ""}
                onChange={changeHandler}
              />
            </div>
            <div>
              <textarea
                type="text"
                name="mAbout"
                placeholder="About you"
                value={mentorDetails.mAbout || ""}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="mWebsite"
                placeholder="Your Website"
                value={mentorDetails.mWebsite || ""}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="mGithub"
                placeholder="Github Profile URL"
                value={mentorDetails.mGithub || ""}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="mLinkedin"
                placeholder="Linkedin Profile URL"
                value={mentorDetails.mLinkedin || ""}
                onChange={changeHandler}
              />
            </div>
            <div>
              <input
                type="text"
                name="mYTch"
                placeholder="Youtube Channel"
                value={mentorDetails.mYTch || ""}
                onChange={changeHandler}
              />
            </div>
            <MultipleInput
              Array={addedmSkills}
              SetArray={setAddedmSkills}
              placeholder={"Add skills"}
              className="mt-2"
            />

            <button
              className="Submit BTN "
              //   onClick={id ? (e) => updateMentor(id, e) : (e) => handleSubmit(e)}
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMentorDetails;
