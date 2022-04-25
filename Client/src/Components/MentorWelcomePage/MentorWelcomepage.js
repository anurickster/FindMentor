import React, { useState, useEffect } from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import "./module.MentorWelcomepage.css";
import tokenDecoder from "../../addons/tokenDecoder";
import axios from "axios";

const MentorWelcomepage = () => {
  const nameArray = ["Ashwini Rathod", "Mentor", "Mohit"];

  const id = tokenDecoder().id;

  const [userName, setUserName] = useState();

  const saveMuserId = async () => {
    const res = await axios
      .get(`http://localhost:9000/mentors/` + id)
      .then(async (res) => {
        if (!res.data?.mUserid?.name) {
          await axios.post(`http://localhost:9000/mentors/`, { mUserid: id });
        }
        if (id) {
          axios
            .get(`http://localhost:9000/mentors/${id}`)
            .then((res) => {
              console.log(res.data);
              setUserName(res.data.mUserid?.name);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  useEffect(() => {
    saveMuserId();
  }, []);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      // console.log(data);
      setUserName(nameArray.name);
      // setShow(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <Navigationbar />
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{userName}</h1>
          <h2>
            {userName
              ? "Happy, to see you back"
              : "We are team of FindMentor.com"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default MentorWelcomepage;
