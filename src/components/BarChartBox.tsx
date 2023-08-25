import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    color: string,
    title: string,
    dataKey: string,
    chartData: object[]
}

const BarChartBox = (props: Props) => {
  return (
    <div className="flex flex-col w-full h-44 gap-2">
        <div className="flex font-medium h-[10%]">{props.title}</div> 
        <div className='flex  h-[90%]'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={80} data={props.chartData}>
                    <Tooltip labelStyle={{display: 'none'}} contentStyle={{background: '#2a3447'}} position={{x:0, y:0}}/>
                    <Bar dataKey={`${props.dataKey}`} stroke={`${props.color}`} fill={`${props.color}`}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox