import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Table from '../../components/Table'
import { useState, useEffect } from 'react'
// import { useRef } from 'react'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })
import SelectMenu from "components/SelectMenu";
import StudentTable from 'components/StudentTable'
import { GetCoursesStudent,AllCoursesStudent,ApplyCourseStudent} from 'helpers/StudentFunctions'
export default function Home() {
  // const courseList = [
  //   {
  //     id: 1,
  //     name: 'Math',
  //     instructor: 'John',
  //     credit: 3
  //   },
  //   {
  //     id: 2,
  //     name: 'English',
  //     instructor: 'Jane',
  //     credit: 3
  //   },
  //   {
  //     id: 3,
  //     name: 'Science',
  //     instructor: 'Jack',
  //     credit: 3
  //   },
  // ]
  const [courseList, setCourseList] = useState([])
  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await GetCoursesStudent()
      // console.log(courses)
      // console.log(Object.values(courses))
      // console.log(Object.keys(courses))

      // fetch all courses
      const allCourses = await AllCoursesStudent()
      
      setAllCourses(allCourses)
      setCourseList(courses)
    }
    fetchCourses()
  }, [ApplyCourseStudent])


  // const addCourseName = useRef()
  return (
    <>
      <Head>
        <title>Student</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {/* <Navbar />
        <div>
          <p> Student </p>
        </div> */}
        <h1 className="text-center">Welcome To Student Page</h1>
        <br></br>
        <br></br>

        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <StudentTable courseList={courseList} />
          <br></br>
          <br></br>

          <SelectMenu Heading="Select a Course" courseList={allCourses} />
          {/*Add heading for form */}
        </div>

      </main>
    </>
  )
}
