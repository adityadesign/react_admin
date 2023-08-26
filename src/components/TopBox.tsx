import { topDealUsers } from "../utils/data"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

const TopBox = () => {
  return (
    <div>
        <div className="text-3xl font-bold mb-6">Top Deals</div>
        <div className="flex flex-col gap-5">
            {topDealUsers.map(item => {
                return (
                    <div key={item.id} className="grid grid-cols-4">
                        <LazyLoadImage src={item.img} effect= "blur" className="w-12 h-12 object-cover rounded-full"/>
                        <div className="text-sm grid col-span-2">
                            <span className="flex self-center">{item.username}</span>
                            <span className="flex self-center">{item.email}</span>
                        </div>
                        <div className="text-sm flex self-center justify-self-end font-semibold">$ {item.amount}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TopBox