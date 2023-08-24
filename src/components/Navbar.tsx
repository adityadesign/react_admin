
const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-[20px]">
      <div className="flex items-center">
        <img src="logo.svg" alt="logo" />
        <span>AdminControl</span>
      </div>
      <div className="flex gap-5">
        <img className="cursor-pointer" src="search.svg" alt="" />
        <img className="cursor-pointer" src="app.svg" alt="" />
        <img className="cursor-pointer" src="expand.svg" alt="" />
        <div className="flex relative">
          <img className="cursor-pointer" src="notifications.svg" alt="" />
          <span className="bg-red-600 px-1.5 text-[12px] flex justify-center items-center rounded-full absolute -right-3 -top-1">1</span>
        </div>
        <div className="flex items-center gap-1.5">
          <img src="profile.png" className="w-8 cursor-pointer" alt="" />
          <span>Jane</span>
        </div>
        <img className="cursor-pointer" src="settings.svg" alt="" />
      </div>
    </div>
  )
}

export default Navbar