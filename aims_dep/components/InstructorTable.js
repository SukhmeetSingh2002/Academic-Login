import React from "react";
import Dropdown from "./Dropdown";


const InstructorTable = ({ courseList }) => {
  const actions = ["Accept", "Reject"];
  return (
    <div className=" shadow-md sm:rounded-lg">
      <table className=" overflow-hidden w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {/* <tr>
            <th className="text-center">
              Pending Requests
            </th> 
          </tr> */}
          <tr>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              Student Name
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Course Name
            </th> */}
            <th scope="col" className="px-6 py-3">
              Credits
            </th>
            {/* <th scope="col" className="px-6 py-3">
                            Status
                        </th> */}
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
              <td className="px-6 py-4">{course.student}</td>
              <td className="px-6 py-4">{course.credits}</td>
              {/* <td className="px-6 py-4">{course.credit}</td> */}
              {/* <td className="px-6 py-4">{course.status}</td> */}

              <td><Dropdown Actions={actions} role ={"instructor"} id ={course.id} /> </td>
            </tr>
          ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default InstructorTable;
