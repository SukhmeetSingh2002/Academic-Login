import React from 'react'
const serverAddress = "http://localhost:8000";
const CourseListPath = "/apply/";
import Router from 'next/router'

const GetCoursesAdvisor = async () => {
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

const ChangeStatusAdvisor = async (action, id) => {
  // alert(action);
  // alert("hi2")
  let courseStatus = 2
  if (action === "Reject") {
    courseStatus = 5;
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

export default ChangeStatusAdvisor
export {GetCoursesAdvisor}