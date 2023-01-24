import Router from "next/router";
import { serverAddress, CourseListPath } from "config/constants";

const GetCoursesAdvisor = async () => {
    const data = await fetch(serverAddress + CourseListPath, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //add authentication token
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    });
    const result = await data.json();
    return result;
};

const ChangeStatusAdvisor = async (action, id) => {

    let courseStatus = 2;
    if (action === "Reject") {
        courseStatus = 5;
    }
 
    const data = await fetch(serverAddress + "/apply/" + id + "/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ status: courseStatus }),
    });
 
    console.log(data);

    const result = await data.json();
    // reload page
    Router.reload(window.location.pathname);

};

export default ChangeStatusAdvisor;
export { GetCoursesAdvisor };
