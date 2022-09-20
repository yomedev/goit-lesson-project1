import { menuConfig } from "../../assets/menu"
import { menuConfig as menuConfig2 } from "../../assets/menu"
import Menu from "../menu/Menu"
import User from "../user/User"
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="brand"></span>
      <Menu items={menuConfig} />
      <User name="Bill" />
    </div>
  )
}

export default Sidebar