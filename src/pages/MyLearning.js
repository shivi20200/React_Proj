import React from "react";
import "./MyLearning.css";
import businessEtiquetteImg from "../assets/Business_Etiquette.jpg";
import communication_skill_Img from "../assets/communication skill.jpg";
import Leadership_essentials_Img from "../assets/Leadership essentials.jpeg";
import Team_Collaboration_Img from "../assets/Team_Collaboration.jpg";
import Time_management_Img from "../assets/Time_management.jpg";


const MyLearning = () => {
  const dummyCourses = [
    {
      id: 1,
      title: "Business Etiquette...",
      rating: 3,
      tag: "E-LEARNING",
      percent: "0%",
      status: "Not Yet Started",
      image:  businessEtiquetteImg
    },
    {
      id: 2,
      title: "Communication Skills",
      rating: 4,
      tag: "E-LEARNING",
      percent: "10%",
      status: "In Progress",
      image: communication_skill_Img
    },
    {
      id: 3,
      title: "Leadership Essentials",
      rating: 5,
      tag: "E-LEARNING",
      percent: "100%",
      status: "Completed",
      image: Leadership_essentials_Img
    },
    {
      id: 4,
      title: "Time Management",
      rating: 4,
      tag: "E-LEARNING",
      percent: "0%",
      status: "Not Yet Started",
      image: Time_management_Img
    },
    {
      id: 5,
      title: "Team Collaboration",
      rating: 3,
      tag: "E-LEARNING",
      percent: "35%",
      status: "In Progress",
      image: Team_Collaboration_Img
    }
  ];

  return (
    <div className="my-learning-page">
      <div className="heading">
        <h2>My Learning</h2>
        <div className="filters">
          <button className="active">All</button>
          <button>In Progress</button>
          <button>Over Due</button>
          <button>Not Started</button>
        </div>
      </div>

      <div className="subheading">Yet to start</div>

      <div className="card-list">
        {dummyCourses.map((course) => (
          <div className="learning-card" key={course.id}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <div className="course-details">
              <h3 className="course-title">{course.title}</h3>
              <div className="stars">
                {"★".repeat(course.rating) + "☆".repeat(5 - course.rating)}
              </div>
              <span className="tag">🎓 {course.tag}</span>
            </div>
           <div className="course-status">
  <div className="status-info">
    <div className="percent">{course.percent}</div>
    <span className="status">{course.status}</span>
  </div>
  <button className="heart-btn">♡</button>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLearning;
