import React, { useState } from "react";
import Courses from "../courses/Courses";

const AllCourses = () => {
  const [courses, setCourses] = useState([
    { title: "Java Course", description: "this is demo course" },
    { title: "Java Scrit Course", description: "this is demo course" },
    { title: "Tailwind Course", description: "This is basice of tailwind." },
  ]);

  console.log(courses);
  return (
    <>
      <h1>All Course</h1>
      <p>List of courses are as follows</p>
      {courses.length > 0
        ? courses.map((item) => <Courses course={courses} />)
        : "No course"}
    </>
  );
};

export default AllCourses;
