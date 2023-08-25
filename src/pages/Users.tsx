import DataTable from "../components/DataTable"

const Users = () => {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-3xl text-semibold">Users</span>
      <DataTable/>
    </div>
  )
}

export default Users