import React from 'react'
import university from '../../assets/university.json'
import styles from './Cities.module.css'
import CityItem from './CityItem';
const { cities } = university;


const CitiesList = () => {
  return (
    <ul className={styles.list}>
      {
        cities.map(city => (
          <CityItem isOnline={true} key={city} name={city} />
        ))
      }
    </ul>
    
  )
}



export default CitiesList