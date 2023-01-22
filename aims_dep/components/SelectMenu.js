import React from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { ApplyCourseStudent } from "helpers/StudentFunctions";
const SelectMenu = ({ Heading,courseList }) => {

  const selectRef = useRef();


  const handleOnClick = (item) => {
    // ref
    console.log(item);
    console.log(selectRef.current.value);
  };



  return (
    <>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{Heading}</label>
      
      <select 
      ref={selectRef}
      // onChange={(e) => handleOnClick(e.target.value)}
      id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>Choose a Course</option>
        {courseList.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <button  onClick={() => ApplyCourseStudent(selectRef.current.value)}>Add</button>
    </>
  );
};

export default SelectMenu;

