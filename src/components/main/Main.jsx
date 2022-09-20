import Section from "../section/Section"
import TutorsList from "../tutors/TutorsList"
import university from "../../assets/university.json"
import { ThemeProvider } from "styled-components"
import CitiesList from "../city/CitiesList"

const Main = () => {
  const ori = "column"
  return (
    <CitiesList />
    // <<ThemeProvider theme="">
    //   <main>
    //     <Section title="Tutors" orientetion="column">
    //       <TutorsList tutors={university.tutors} />
    //     </Section>
    //   </main>
    // </ThemeProvider>>


  )
}

export default Main