import React, { useState } from "react"
import propTypes from "prop-types"
import "./Card.css"

export default function Card({
  student: { pic, firstName, lastName, email, company, skill, grades, tag },
  showGrade,
  addTag,
  index,
}) {
  const [hide, setHide] = useState(showGrade)
  const [tagValue, setTagValue] = useState("")

  //! (+first) and (+second) for converting the string to number type
  const average = grades.reduce((first, second) => +first + +second) / grades.length

  const tags = tag?.map((tagValue) => <span className="Span">{tagValue}</span>)
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
        {tags && <section className="TagSection">{tags}</section>}
        <input
          type="text"
          id="tagInput"
          name="tagInput"
          placeholder="Add a tag"
          className="TagInput"
          value={tagValue}
          onChange={({ target }) => setTagValue(target.value)}
          onKeyPress={(event) => {
            addTag(event.charCode, event.target.value, index)
            event.charCode === 13 && setTagValue("")
          }}
        />
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
  student: propTypes.object,
  showGrade: propTypes.bool,
  addTag: propTypes.func,
  index: propTypes.number,
}
