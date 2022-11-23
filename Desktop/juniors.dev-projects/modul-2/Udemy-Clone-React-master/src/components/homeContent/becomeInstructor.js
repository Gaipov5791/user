import React from "react";
import "../../components/homeContent/becomeInstructor.css";
import Modal from "../modal/Modal";
import {useState} from 'react';

function BecomeInstructor() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <div className="becomeInstructorDiv">
      <div className="backgroundColorDiv"></div>
      <img
        src="https://s.udemycdn.com/home/non-student-cta/udlite-lohp-promo-teacher.jpg"
        alt="instructorImg"
        className="instructorImg"
      ></img>
      <div className="contentDiv">
        <h2 className="heading">Become an instructor</h2>
        <p className="about">
          Top instructors from around the world teach millions of students on
          Udemy. We provide the tools and skills to teach what you love.{" "}
        </p>
        <div className="startTeching button"  onClick={() => setActiveModal(true)}>Start teaching today</div>
      </div>
		<Modal active={activeModal} setActive={setActiveModal}/>
    </div>
	
  );
}

export default BecomeInstructor;
