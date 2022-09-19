import Section from "../section/Section"
import TutorsList from "../tutors/TutorsList"
import university from "../../assets/university.json"

const Main = () => {
  return (
    <main>
      <Section title="Tutors">
        <TutorsList tutors={university.tutors} />
      </Section>
    </main>
  )
}

export default Main