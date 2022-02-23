import React, { useEffect, useState } from "react"
import Card from "../../components/card/Card"
import "./Home.css"

export default function Home() {
  const [studentData, setstudentData] = useState([])

  const fetchData = async () => {
    const { students } = await (await fetch("https://api.hatchways.io/assessment/students")).json()
    setstudentData(students)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="HomeContainer">
      {studentData.map((student) => (
        <Card student={student} />
      ))}
    </div>
  )
}
