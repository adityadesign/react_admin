import { Link } from "react-router-dom"
import { menu } from "../utils/data"

const Menu = () => {
  return (
    <div>
        {menu.map(item => {
          return (
            <div key={item.id} className="flex-col flex gap-2 mb-5">
              <span className="text-sm font-semibold text-[#ddd]">{item.title.toUpperCase()}</span>
              {item.listItems.map(item => {
                return (
                <Link key={item.id} to={item.url} className="flex items-center p-2 gap-2 hover:bg-[#384256] rounded-md">
                  <img src={item.icon} alt="" />
                  <span className="text-md">{item.title}</span>
                </Link>
                )}
              )}
            </div>
          )
        })}
    </div>
  )
}

export default Menu