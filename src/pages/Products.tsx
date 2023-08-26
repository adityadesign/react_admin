import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable"
import { products } from "../utils/data"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Button } from "@mui/material";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  {
      field: 'img',
      headerName: 'Avatar',
      width: 80,
      renderCell: (params) => {
          return <LazyLoadImage src={params.row.img || '/noavatar.png'} effect= "blur" className="h-10 w-10 object-cover"/>
      },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 230,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 140,
    editable: true,
  },
  {
    field: 'producer',
    headerName: 'Producer',
    width: 120,
    editable: true,
  },
  {
    field: 'color',
    headerName: 'Color',
    sortable: false,
    width: 120,
  },
  {
      field: 'createdAt',
      headerName: 'Created At',
      width: 120,
      editable: true,
  },
  {
      field: 'inStock',
      type: 'boolean',
      headerName: 'Stock',
      width: 120,
      editable: true,
  },
];

const Products = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-4 items-end">
        <span className="text-3xl text-semibold">Products</span>
        <Button variant="contained"  style={{fontSize: '12px', fontWeight: "bold"}}>Add New Products</Button>
      </div>
      <DataTable choice={'products'} columns={columns} rows={products}/>
    </div>
  )
}

export default Products