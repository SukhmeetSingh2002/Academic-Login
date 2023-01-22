import React from "react";
import { useState } from "react";
// import styles from "../styles/Dropdown.module.css";
import ChangeStatusAdvisor from "../helpers/AdvisorFunctions";
import ChangeStatusInstructor from "../helpers/InstructorFunctions";
import ChangeStatusStudent from "../helpers/StudentFunctions";

const Dropdown = ({ Actions,role, id}) => {

  const [hiddenDropdown, setHiddenDropdown] = useState("hidden");
  
  // Toggle dropdown menu
  const toggleDropDown = (e) => {
    e.preventDefault();
    console.log("toggleDropDown");
    if (hiddenDropdown === "hidden") {
      setHiddenDropdown("");
    } else {
      setHiddenDropdown("hidden");
    }
    console.log(hiddenDropdown)
  }

  // Process request to change status
  const ProcessRequest = (role,action,id,e) => {
    e.preventDefault();
    if (role === "advisor") {
      alert("hi1")
      ChangeStatusAdvisor(action,id)
    }
    else if (role === "instructor") {
      ChangeStatusInstructor(action,id)
    }
    else if (role === "student"){
      console.log("in student")
      ChangeStatusStudent(action,id)
    }
    // console.log(role,e)
  }
  return (
    
    <div>
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 " type="button"
      onClick={toggleDropDown}
      >Actions <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
      {/* Dropdown menu */}
      <div id="dropdown" className={`z-40  ${hiddenDropdown} bg-white divide-y divide-gray-100 rounded shadow w-39 dark:bg-gray-700`}>
        <ul className="	absolute py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          {Actions.map((action) => (
            <li key={action}>
              <a href="" className="block px-4 py-2 bg-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white " onClick={(e)=>{ProcessRequest(role,action,id,e)}}  >{action}</a>
            </li>
          ))
          }
        </ul>
      </div>
      
    </div>

  );
};

export default Dropdown;
