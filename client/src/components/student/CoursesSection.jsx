import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
  const { allCourses } = useContext(AppContext);
  return (
    <div className="py-16 md:px-40 px-8">
      <h2 className="text-3xl font-medium text-gray-800">
        Learn from the best
      </h2>
      <p className="text-sm md:text-base text-gray-500 mt-3">
        Discover our top-rated courses designed to help you master new skills
        and advance your career. Whether you're looking to start a new journey
        or enhance your expertise, we have something for everyone.
      </p>

      <div>
        {allCourses.slice(0, 4).map((corse, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Link
        to={"/courses-list"}
        onClick={() => scrollTo(0, 0)}
        className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
