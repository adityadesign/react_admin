import { GridColDef } from "@mui/x-data-grid";
import {useEffect} from 'react'
import DataTable from "../components/DataTable"
import { userRows } from '../utils/data';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
      field: 'img',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
          return <LazyLoadImage src={params.row.img || '/noavatar.png'} effect= "blur" className="h-10 w-10 object-cover rounded-full"/>
      },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 140,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 140,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    sortable: false,
    width: 140,
  },
  {
      field: 'createdAt',
      headerName: 'Created At',
      width: 120,
      editable: true,
  },
  {
      field: 'verified',
      type: 'boolean',
      headerName: 'Verified',
      width: 100,
      editable: true,
  },
];



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#2a3447',
  boxShadow: 24,
  p: 4,
  color: 'white',
  borderRadius: '10px'
};

interface Form{
  id: number | undefined,
  img: string,
  lastName: string,
  firstName: string,
  email: string,
  phone: string,
  createdAt: string | Date,
  verified: boolean | undefined
}

const Users = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [allData, setAllData] = useState<Form[]>(userRows)
  const [formData, setFormData] = useState<Form>({
    id: undefined,
    img: '',
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    createdAt: '',
    verified: false,
  })

  // Get Current Date
  const currentDate = new Date()
  const day = String(currentDate.getDate()).padStart(2, '0')
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const year = currentDate.getFullYear()
  const formattedDate = `${day}.${month}.${year}`

  useEffect(()=>{
    fetch('https://mocki.io/v1/cb02559e-d3e6-4ac0-ac5c-494895e20fc9')
      .then(res => res.json())
      .then(data => setAllData(data))
      .then(err => console.log(err))   
  },[])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, checked} = event.target
    setFormData((prevData)=>({
      ...prevData,
      [name]: value,
      id: allData.length+1,
      createdAt: formattedDate,
      verified: checked ? true : false
    }))
  }
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    console.log(formData);
    setOpen(false)
    if(allData?.length){
      setAllData([...allData, formData])
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 items-end">
        <span className="text-3xl text-semibold">Users</span>
        <Button variant="contained" onClick={handleOpen} style={{fontSize: '12px', fontWeight: "bold"}}>Add New Users</Button>
      </div>
      {allData && <DataTable choice={'users'} columns={columns} rows={allData}/>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant={'h5'} component={'span'} >
            Add new user
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'form'} className="grid grid-cols-3 gap-4 text-sm" onSubmit={handleSubmit}>
              <label className="text-sm">First name<input onChange={handleChange} name="firstName" value={formData.firstName} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="firstName" required/></label>
              <label className="text-sm">Last name<input onChange={handleChange} name="lastName" value={formData.lastName} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="lastName" required/></label>
              <label className="text-sm">Phone<input onChange={handleChange} name="phone" value={formData.phone} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="phone" required/></label>
              <label className="text-sm col-span-2">Email<input onChange={handleChange} name="email" value={formData.email} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="email" placeholder="email" required/></label>
              <div className="text-sm flex items-center">
                <label htmlFor="verified">Verified:</label>
                <input id="verified" className="m-1" type="checkbox" onChange={handleChange}/>
              </div>
              <label className="text-sm col-span-2">Image<input onChange={handleChange} name="img" value={formData.img} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="file"/></label>
              <button className="col-span-3 bg-blue-600 p-3 rounded-md text-base hover:bg-blue-500" style={{marginTop: '10px'}}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Users