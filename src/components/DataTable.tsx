import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import { userRows } from '../utils/data';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || '/noavatar.png'} alt="" className='h-10 w-10 object-cover rounded-full'/>
        },
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

const DataTable = () => {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
            className='bg-white p-5'
            rows={userRows}
            columns={columns}
            initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 6,
                    },
                },
            }}
            slots={{toolbar: GridToolbar}}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {debounceMs: 500}
                }
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            disableColumnSelector
            disableDensitySelector
        />
    </Box>
  )
}

export default DataTable