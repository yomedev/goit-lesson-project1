import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = ({ children, title, orientetion }) => {

  return (
    <MySection orientetion={orientetion}>
      <h3>{title}</h3>
      {/* {children} */}
    </MySection>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

const MySection = styled.section`
  display: flex;
  flex-direction: ${props => (
  props.orientetion === "column" 
  ? "column"
  : "row")};
`