import React, { useEffect, useState } from "react"
import Card from "../../components/card/Card"
import "./Home.css"

export default function Home() {
  const [studentData, setstudentData] = useState([])
  const [searchValue, setsearchValue] = useState("")
  const [data, setData] = useState([])

  const fetchData = async () => {
    const { students } = await (await fetch("https://api.hatchways.io/assessment/students")).json()
    setstudentData(students)
  }

  //! Everytime the user type something in unput the onChange will update state and this useEffect will run everytime the searchValue is changes
  useEffect(() => {
    const studentsArray = [...studentData]
    const searchResult = studentsArray.filter((student) => {
      const name = `${student.firstName} ${student.lastName}`
      return name.toLowerCase().includes(searchValue.trim().toLowerCase())
    })

    if (searchResult.length === 0) {
      setData(studentsArray)
    } else {
      setData(searchResult)
    }
  }, [searchValue, studentData])

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="HomeContainer">
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Search by name"
        className="SearchInput"
        value={searchValue}
        onChange={({ target }) => setsearchValue(target.value)}
      />
      {data.map((student) => (
        <Card student={student} showGrade={false} />
      ))}
    </div>
  )
}
