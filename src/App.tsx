import {Route, Routes, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Users from './pages/Users'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Login from './pages/Login'

function App() {
  const Layout = () =>{
    return (
      <div>
        <Navbar/>
        <div className='flex'>
          <div className='w-[250px] px-[20px] py-[5px] border-r-2 border-[#384256]'>
            <Menu/>
          </div>
          <div className='px-[20px] py-[5px] w-[100%]'>
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  return (
    <div className="bg-[#2a3447] text-white">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='products' element={<Products/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
