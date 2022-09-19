import React from 'react'
import TutorItem from './TutorItem'
import PropTypes from 'prop-types'

const TutorsList = ({ tutors }) => {
  return (
    <ul>
      {tutors.map(({ lastName, phone, email }) => (
        <li key={email}>
          <TutorItem
            lastName={lastName}
            phone={phone}
            email={email}
          />
        </li>
      ))}
    </ul>
  )
}

export default TutorsList

TutorsList.propTypes = {
  tutors: PropTypes.arrayOf(PropTypes.shape({
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    
  }))
}