import React from "react"
import propTypes from "prop-types"
import {} from "react-dom"

export default function Card({ student: { pic, firstName, lastName, email, company, skill, grades } }) {
  //! (+first) and (+second) for converting the string to number type
  const average = grades.reduce((first, second) => +first + +second) / grades.length
  return (
    <div>
      <img src={pic} alt="studentPhoto" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>Email : {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average : {average}%</p>
    </div>
  )
}

Card.propTypes = {
  pic: propTypes.string,
  firstName: propTypes.string,
  lastName: propTypes.string,
  email: propTypes.string,
  company: propTypes.string,
  skill: propTypes.string,
  grades: propTypes.array,
}
