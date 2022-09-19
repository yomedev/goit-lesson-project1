import { menuConfig } from "../../assets/menu"
import { menuConfig as menuConfig2 } from "../../assets/menu"
import Menu from "../menu/Menu"
import User from "../user/User"

const Sidebar = () => {
  return (
    <nav>
      <Menu items={menuConfig} />
      <User name="Bill" />
    </nav>
  )
}

export default Sidebar