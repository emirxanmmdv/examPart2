import './App.scss'
import { BrowserRouter , Routes, Route } from "react-router-dom"
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home'
import Wishlist from './Pages/Wishlist'
import DetailsPage from './Pages/DetailsPage'
import AddPage from './Pages/AddPage'
function App() {




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<AddPage/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/details' element={<DetailsPage/>}/>




          

        </Route>

      </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
