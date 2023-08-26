import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

type Props = {
    columns: GridColDef[],
    rows: object[],
    choice: string
}

const DataTable = (props: Props) => {
    const handleDelete = (id:number) =>{
        //delete
        console.log(id+'has been deleted');
    }

    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <div className='flex gap-1'>
                    <Link to={`${params.row.id}`} onClick={()=>window.scrollTo({top:0})}><img src='/view.svg' alt="" /></Link>
                    <div className='cursor-pointer' onClick={()=>handleDelete(params.row.id)}><img src="delete.svg" alt="" /></div>
                </div>
            )
        },
    }
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
            className='bg-white p-5'
            rows={props.rows}
            columns={[...props.columns, actionColumn]}
            initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 10,
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