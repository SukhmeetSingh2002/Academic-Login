import React from 'react'
const serverAddress = "http://localhost:8000";
const CourseListPath = "/apply/";
const ALlCourseListPath = "/course/";
const RegisterCoursePath = "create/";
import Router from 'next/router'

const GetCoursesStudent = async () => {
  console.log("in get")
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

const ChangeStatusStudent = async (action, id) => {
  // alert(action);
  // alert("hi2")
  // console.log("in change called by: "+ChangeStatusStudent.caller)

  let courseStatus = 4
  if (action === "Withdraw") {
    courseStatus = 3;
  }
  // alert('hai1')
  const data = await fetch(serverAddress +'/apply/' + id+"/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify({ "status": courseStatus }),
  });
  // alert('hai2')
  console.log(data)
  // alert('hai3')
  const result = await data.json();
  // alert('hai4')

  alert(result.status)
  // reload page
  Router.reload(window.location.pathname)

  // if (result.error === undefined) {
  //   if (action === "Reject"){
  //     alert("Application rejected")
  //   }
  //   else{
  //     alert("Application approved")
  //   }
  // }
  // else {
  //   alert(result.error)
  // }
}

const AllCoursesStudent = async () => {
  // console.log("in get")
  const data = await fetch(serverAddress + ALlCourseListPath, {
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

const ApplyCourseStudent = async (id) => {
  console.log("in course apply")
  const data = await fetch(serverAddress + CourseListPath + RegisterCoursePath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //add authentication token
      "Authorization": "Bearer " + localStorage.getItem("token"),

    },
    body: JSON.stringify({ "course": id }),
  });
  const result = await data.json();
  if( data.status === 201){
    alert("Course applied")
  }
  else{
    alert(result.error)
  }

}

export default ChangeStatusStudent
export {GetCoursesStudent,AllCoursesStudent,ApplyCourseStudent}