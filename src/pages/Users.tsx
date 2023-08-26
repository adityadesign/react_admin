import { GridColDef } from "@mui/x-data-grid";
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

interface User{
  lastName: string,
  firstName: string,
  email: string,
  phone: string,
  createdAt: string,
}

const Users = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [userData, setUserData] = useState<User>({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    createdAt: "",
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault()
    setOpen(false)
    console.log(userData)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 items-end">
        <span className="text-3xl text-semibold">Users</span>
        <Button variant="contained" onClick={handleOpen} style={{fontSize: '12px', fontWeight: "bold"}}>Add New Users</Button>
      </div>
      <DataTable choice={'users'} columns={columns} rows={userRows}/>
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
              <label className="text-sm">First name<input onChange={handleChange} name="firstName" value={userData.firstName} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="firstName" required/></label>
              <label className="text-sm">Last name<input onChange={handleChange} name="lastName" value={userData.lastName} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="lastName" required/></label>
              <label className="text-sm">Phone<input onChange={handleChange} name="phone" value={userData.phone} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="text" placeholder="phone" required/></label>
              <label className="text-sm col-span-2">Email<input onChange={handleChange} name="email" value={userData.email} className="w-full bg-[#2a3447] border-2 border-gray-500 mt-1 rounded-sm p-1" type="email" placeholder="email" required/></label>
              <div className="text-sm flex items-center">
                <label htmlFor="verified">Verified:</label>
                <input id="verified" className="m-1" type="checkbox"/>
              </div>
              <button className="col-span-3 bg-blue-600 p-3 rounded-md text-base hover:bg-blue-500" style={{marginTop: '10px'}}>Add</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Users