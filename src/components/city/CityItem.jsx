import React from 'react'
import styles from './Cities.module.css'
import { Icon } from './Styles'
import { Status } from './Styles'


const CityItem = ({ name, isOnline }) => {
  const color = isOnline ? styles.online : styles.offline
  return (
    <Status isOnline={isOnline} className={`${styles.item} ${color}`}>
      <p >{name}</p>
      <Icon />
    </Status>
  )
}

export default CityItem