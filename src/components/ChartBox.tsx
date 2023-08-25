import { Link } from 'react-router-dom';
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    color: string,
    icon: string,
    title: string,
    number: string | number,
    dataKey: string,
    percentage: number,
    chartData: object[]
}

const ChartBox = (props: Props) => {
  return (
    <div className='grid grid-cols-2 h-full'>
        <div className='flex flex-col justify-between'>
            <div className='flex text-sm items-center'>
                <img src={props.icon} alt="" />
                <span className='font-medium'>{props.title}</span>
            </div>
            <div className='text-3xl font-semibold'>{props.number}</div>
            <Link to='/' style={{color: `${props.color}`}}>view all</Link>
        </div>
        <div className='flex flex-col'>
            <div className='flex h-[65%] w-full'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={props.chartData}>
                        <Tooltip labelStyle={{display: 'none'}} contentStyle={{background: 'transparent', border: 'none'}} position={{x:10, y:60}}/>
                        <Line type="monotone" dataKey={`${props.dataKey}`} stroke={`${props.color}`} strokeWidth={2} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='flex h-[23%] text-2xl justify-end items-end font-semibold' style={{color: props.percentage>0 ? 'lightgreen' : 'red'}}>{props.percentage}%</div>
            <div className='flex text-[12px] h-[12%] justify-end text-gray-400'>this month</div>
        </div>
    </div>
  )
}

export default ChartBox