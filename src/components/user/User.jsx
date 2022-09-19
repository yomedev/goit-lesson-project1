import notFound from '../../assets/not-found.png'

const User = ({profileUrl = notFound, name}) => {
  return (
    <div>
      <img src={profileUrl} alt="user" />
      <p>{name}</p>
    </div>
  )
}

export default User