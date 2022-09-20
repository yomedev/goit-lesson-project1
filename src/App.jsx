import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'
import university from "./assets/university.json"
import Card from './components/Card/Card'
import Section from './components/section/Section'
import CitiesList from './components/city/CitiesList'

const App = () => {
  return (
    <div className="App">
      {/* <Sidebar />
      <Main />
      
      <Card name={university.name} /> */}
    <CitiesList />
    </div>
  )
}

export default App