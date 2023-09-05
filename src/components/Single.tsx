import {useParams} from 'react-router-dom'
import { singleUser, userRows } from '../utils/data'
import { Button } from '@mui/material'
import { Legend, Line, LineChart, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Single = () => {
    const {id} = useParams()
    const filteredData = userRows.filter(item => item.id === Number(id))[0]
    
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-5'>
        <div className='flex gap-4 flex-col w-full'>
            <div className='flex items-center gap-3'>
                <img className='w-[120px] h-[120px] object-cover rounded-xl' src={filteredData.img} alt="" />
                <span className='text-2xl font-semibold'>{filteredData.firstName} {filteredData.lastName}</span>
                <Button variant="contained" style={{fontSize: '12px', fontWeight: "bold"}}>Update</Button>
            </div>
            <div className='flex flex-col gap-4'>
                <div>Fullname: {filteredData.firstName} {filteredData.lastName}</div>
                <div>Email: {filteredData.email}</div>
                <div>Phone: {filteredData.phone}</div>
                <div>Status: {filteredData.verified ? 'Verified' : 'Not verified'}</div>
            </div> 
            <hr className='border-gray-500 w-[90%] mx-auto mt-5'/>
        </div>
        <div className='flex flex-col row-span-2'>
            <span className='text-xl font-semibold text-[#ddd] mb-4'>Latest Activities</span>
            <div className='w-[70%] flex flex-col gap-5 border-l-2 pt-8 border-red-600'>
                {singleUser.activities.map((item,index) => {
                    return (
                        <div key={index} className='p-3 text-sm bg-red-500 bg-opacity-10 flex flex-col gap-2 relative'>
                            <span className='font-semibold text-[#ddd]'>{filteredData.firstName} {filteredData.lastName} {item.text}</span>
                            <span className='text-gray-400'>{item.time}</span>
                            <div className='absolute w-2 h-2 -bottom-1 -left-1.5 bg-red-400 rounded-full'></div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className='mt-5'>
            <ResponsiveContainer width="85%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={singleUser.chart.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Legend />
                    <Tooltip labelStyle={{display: 'none'}} contentStyle={{background: 'transparent', border: 'none'}} position={{x:510, y:0}}/>
                    <Line type="monotone" dataKey={singleUser.chart.dataKeys[0].name} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey={singleUser.chart.dataKeys[1].name} stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Single