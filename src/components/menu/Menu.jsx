import MenuItem from "./MenuItem"


const Menu = ({ items }) => {
  return (
    <nav className="menu">
      {items.map(({ name }) => (
        <MenuItem key={name} name={name} />
      ))}
    </nav>
  )
}

export default Menu