import React from 'react'

const serverAddress = "http://localhost:8000";
const CourseListPath = "/apply/";
const CourseAddPath = "/course";

const GetCoursesInstructor = async () => {
  const data = await fetch(serverAddress + CourseListPath, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //add authentication token
      "Authorization": "Bearer " + localStorage.getItem("token"),

    },
  });
  const result = await data.json();
  return result;
}

const ChangeStatusInstructor = async (action, id) => {
  console.log(action);
  let courseStatus = 1 // pending advisor
  if (action === "Reject") {
    courseStatus = 6; // rejected by instructor
  }
  const data = await fetch(serverAddress + CourseListPath + id + "/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ "status": courseStatus }),
  });
  const result = await data.json();
  console.log(result)
  console.log(data)
  alert("hi")
  if (result.status === undefined) {
    alert(data.error)
  }
  else {
    alert(result.status)
  }
}

const AddCourseInstructor = async (courseName, courseCredit) => {
  console.log(courseName);
  console.log(courseCredit);
  const data = await fetch(serverAddress + CourseAddPath + "/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ "name": courseName, "credits": courseCredit }),
  });
  const result = await data.json();
  if (data.status === 201) {
    alert("Course added successfully")
  }
  else {
    alert(result.error)
  }

}
const DeleteCourseInstructor = async (courseName) => {
  // console.log(courseName);
  // const data = await fetch(serverAddress+"/course", {
  //   method: "DELETE",
  //   headers: {
  //     "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ "name" : courseName}),
  //   });
  // const result = await data.json();
  // if (data.status === 204) {
  //   alert("Course deleted successfully")
  // }
  // else{
  //   alert(result.error)
  // }
}

export default ChangeStatusInstructor
export { AddCourseInstructor, DeleteCourseInstructor, GetCoursesInstructor }