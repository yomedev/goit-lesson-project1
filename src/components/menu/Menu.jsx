import MenuItem from "./MenuItem"

const Menu = ({ items }) => {
  return (
    <ul>
      {items.map(({name}) => (
        <li key={name}>
          <MenuItem name={name} />
        </li>
      ))}
    </ul>
  )
}

export default Menu