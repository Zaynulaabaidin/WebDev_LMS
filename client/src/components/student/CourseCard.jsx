import React, { useContext } from "react";
import { assets } from "../../../assets";
import { AppContext } from "../../context/AppContext";

const CourseCard = ({ courses }) => {
  const { currency } = useContext(AppContext);

  return (
    <div>
      <img src={courses.courseThumbnail} alt="" />
      <div>
        <h3>{courses.courseTitle}</h3>
        <p>{courses.educator.name}</p>

        <div>
          <p>4.5</p>
          <div>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star} alt="" />
            ))}
          </div>
          <p>22</p>
        </div>
        <p>
          {currency}
          {(
            courses.coursePrice -
            (courses.courseDiscount * courses.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
