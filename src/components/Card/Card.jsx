import React from 'react'
import image from '../../assets/school.png'
import styles from './Card.module.scss'

const Card = ({name}) => {
  return (
    <div className={styles.card}>
      <img src={image} />
      <p>{name}</p>
    </div>
  )
}

export default Card