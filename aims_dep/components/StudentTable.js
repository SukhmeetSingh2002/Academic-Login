import React from "react";

import Dropdown from "./Dropdown";
const StudentTable = ({courseList}) => {
    const status_actions = ['pending instructor approval','pending advisor approval','enrolled','Withdrawn','drop','Rejected by advisor','Rejected by instructor'] 
    const actions = ["Drop", "Withdraw"];

    return (
        <div className=" shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Course Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Instructor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Credits
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courseList.map((course) => (
                        <tr key={course.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {course.course_name}
                            </th>
                            <td className="px-6 py-4">{course.instructor}</td>
                            <td className="px-6 py-4">{course.credits}</td>
                            <td className="px-6 py-4">{status_actions[course.status]}</td>
                            <td><Dropdown Actions={actions} role={"student"} id={course.id}/> </td>
                        </tr>
                    ))
                        
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;
