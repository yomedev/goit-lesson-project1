import notFound from '../../assets/not-found.png'
import './user.scss'

const User = ({profileUrl = notFound, name}) => {
  return (
    <a className="user">
      {/* <img src={profileUrl} alt="user" /> */}
      <p>{name}</p>
    </a>
  )
}

export default User