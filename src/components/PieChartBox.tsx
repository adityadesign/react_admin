import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Mobile', value: 400 },
  { name: 'Desktop', value: 300 },
  { name: 'Laptop', value: 300 },
  { name: 'Tablet', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartBox = () => {
  return (
    <div className='flex flex-col h-full w-full justify-center'>
      <span className='h-[20%] text-3xl font-semibold'>Leads by Source</span>
      <div className='h-[80%]'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={250} height={500}>
            <Legend verticalAlign="bottom" height={100} iconSize={8} iconType='circle'/>
            <Pie
              data={data}
              cx={120}
              cy={120}
              innerRadius={80}
              outerRadius={100}
              fill="#8884d8"
              minAngle={20}
              paddingAngle={15}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChartBox