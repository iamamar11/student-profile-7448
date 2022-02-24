import React, { useEffect, useState, useCallback } from "react"
import Card from "../../components/card/Card"
import AppInput from "../../components/input/AppInput"
import "./Home.css"

export default function Home() {
  const [studentData, setstudentData] = useState([])
  const [searchValue, setsearchValue] = useState("")
  const [searchTag, setsearchTag] = useState("")
  const [data, setData] = useState([])

  const fetchData = async () => {
    const { students } = await (await fetch("https://api.hatchways.io/assessment/students")).json()
    setstudentData(students)
  }

  const addTag = (keycode, value, index) => {
    if (keycode === 13) {
      let student = studentData[index]
      const { tag } = student
      let newTag = null
      if (tag) {
        newTag = [...tag, value]
      } else {
        newTag = [value]
      }
      student.tag = newTag
      let newStudent = [...studentData]
      newStudent.splice(index, 1, student)
      setstudentData(newStudent)
    }
  }

  //! Everytime the user type something in search ny name input the onChange will update state and this useEffect will run everytime the searchValue is changes
  useEffect(() => {
    const studentsArray = [...studentData]
    const searchResult = studentsArray.filter((student) => {
      const name = `${student.firstName} ${student.lastName}`
      return name.toLowerCase().includes(searchValue.trim().toLowerCase())
    })
    confirmDataToDisplay(searchResult, studentsArray)
  }, [searchValue, studentData])

  //! Everytime the user type something in search By tag Input the onChange will update state and this useEffect will run everytime the searchValue is changes
  useEffect(() => {
    const studentsArray = [...studentData]
    const tagResult = studentsArray.filter((student) => {
      return student.tag?.includes?.(searchTag?.toLowerCase())
    })
    confirmDataToDisplay(tagResult, studentsArray)
  }, [searchTag, studentData])

  const confirmDataToDisplay = (result, studentsArray) => {
    if (result.length === 0) {
      setData(studentsArray)
    } else {
      setData(result)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="HomeContainer">
      <AppInput value={searchValue} onChangeFunction={setsearchValue} />
      <AppInput value={searchTag} onChangeFunction={setsearchTag} />
      {data.map((student, index) => (
        <Card key={student.firstName} student={student} showGrade={false} addTag={addTag} index={index} />
      ))}
    </div>
  )
}
