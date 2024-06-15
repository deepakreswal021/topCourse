import React, { useState } from "react";
import Card from "./Card";
const Cards = (props) => {
  const courses = props.courses.data;
  const [likedCourses, setLikedCourses] = useState([]);
  const category = props.category;
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((arr) => {
        arr.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    }
    else{
      return courses[category];
    }
  }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
