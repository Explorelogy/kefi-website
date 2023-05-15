import React from "react"

const Button = props => {
  return (
    <div className="flex flex-wrap">
      <div
        className={`px-6 py-4 bg-${props.color} text-${props.textColor} font-semibold rounded-xl text-xl border-2 border-${props.borderColor} cursor-pointer `}
      >
        {props.name}
      </div>
    </div>
  )
}
// <Button
//   color="primaryBlue"
//   textColor="white"
//   borderColor="primaryBlue"
//   name="Contact"
// />

export default Button
