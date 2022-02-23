import React, { useState } from "react"
import propTypes from "prop-types"
import "./Card.css"

export default function Card({ student: { pic, firstName, lastName, email, company, skill, grades }, showGrade }) {
  const [hide, setHide] = useState(showGrade)

  //! (+first) and (+second) for converting the string to number type
  const average = grades.reduce((first, second) => +first + +second) / grades.length
  return (
    <div className="CardContainer">
      <section className="UserImageSection">
        <img src={pic} alt="studentPhoto" className="UserImage" />
      </section>
      <section className="UserData">
        <h2 className="CardName">
          {firstName} {lastName}
        </h2>
        <p className="UserDetial">Email : {email}</p>
        <p className="UserDetial">Company: {company}</p>
        <p className="UserDetial">Skill: {skill}</p>
        <p className="UserDetial">Average : {average}%</p>
        {hide && (
          <section className="gradeSection">
            {grades.map((marks, index) => (
              <p className="UserDetial">
                Test{index + 1}: {marks}%{" "}
              </p>
            ))}
          </section>
        )}
      </section>
      <section className="HideShowSection">
        <span className="HideShow" onClick={() => setHide(!hide)}>
          {hide ? "-" : "+"}
        </span>
      </section>
    </div>
  )
}

Card.propTypes = {
  //   pic: propTypes.string,
  //   firstName: propTypes.string,
  //   lastName: propTypes.string,
  //   email: propTypes.string,
  //   company: propTypes.string,
  //   skill: propTypes.string,
  //   grades: propTypes.array,
}
