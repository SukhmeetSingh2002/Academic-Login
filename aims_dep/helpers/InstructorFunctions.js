import { serverAddress, CourseListPath, CourseAddPath } from "config/constants";

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
  // console.log(result.error)
  console.log(data)
  if (data.status === 200){
    alert(result.status)
  }
  else {
    alert(result.error)
  }
}

const AddCourseInstructor = async (courseName, courseCredit,e) => {
  e.preventDefault();
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
  console.log(result)
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