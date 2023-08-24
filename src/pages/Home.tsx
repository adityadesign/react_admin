import ChartBox from "../components/ChartBox"
import TopBox from "../components/TopBox";

import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../utils/data';


const Home = () => {
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(180px,auto)]">
        <div className="p-[20px] rounded-md border-[#384256] border-2 row-span-3"><TopBox/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxUser}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxProduct}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2 row-span-3">Box4</div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxRevenue}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxConversion}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2 col-span-2 row-span-2">Box7</div>
        <div className="p-[20px] rounded-md border-[#384256] border-2">Box8</div>
        <div className="p-[20px] rounded-md border-[#384256] border-2">Box9</div>
    </div>
  )
}

export default Home