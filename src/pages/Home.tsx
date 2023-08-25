import BarChartBox from "../components/BarChartBox";
import ChartBox from "../components/ChartBox"
import PieChartBox from "../components/PieChartBox";
import TopBox from "../components/TopBox";

import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser, barChartBoxRevenue, barChartBoxVisit } from '../utils/data';


const Home = () => {
  return (
    <div className="grid gap-5 grid-cols-4 auto-rows-[minmax(100px,auto)]">
        <div className="p-[20px] rounded-md border-[#384256] border-2 row-span-3"><TopBox/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxUser}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxProduct}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2 row-span-3"><PieChartBox/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxRevenue}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><ChartBox {...chartBoxConversion}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2 col-span-2 row-span-2">Box7</div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><BarChartBox {...barChartBoxVisit}/></div>
        <div className="p-[20px] rounded-md border-[#384256] border-2"><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home