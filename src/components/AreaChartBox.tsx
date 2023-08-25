import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thrus',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const AreaChartBox = () => {
  return (
    <div className='flex flex-col h-full w-full gap-5'>
      <span className='text-2xl font-bold'>Revenue Analytics</span>
      <ResponsiveContainer width="100%" height="90%">
        <AreaChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChartBox