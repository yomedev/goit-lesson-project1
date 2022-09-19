import React from 'react'

const TutorItem = ({lastName, phone, email}) => {
  return (
    <>
      <p>{lastName}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </>
  )
}

export default TutorItem

