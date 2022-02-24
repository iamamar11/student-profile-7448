import React, { memo } from "react"

const AppInput = ({ value, onChangeFunction }) => {
  console.log("render")
  return (
    <>
      <input
        type="text"
        id="userName"
        name="userName"
        placeholder="Search by tag"
        className="SearchInput"
        value={value}
        onChange={({ target }) => onChangeFunction(target.value)}
      />
    </>
  )
}

export default memo(AppInput)
