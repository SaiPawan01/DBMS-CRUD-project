import { Route,Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import ListFood from './pages/Food/ListFood.jsx';
import AddFood from './pages/AddFood/AddFood.jsx';
import CategoryList from './pages/Category/CategoryList.jsx';
import Users from './pages/Users/Users.jsx';
import Order from './pages/Orders/Order.jsx';
import Category_add from './pages/AddCategory/Category_add.jsx';





import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

function App() {

  const url = 'http://localhost:3000'

  return (
     <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        
        <Routes>
          <Route path='/add_restaurant' element={<Add url={url} />}/>
          <Route path='/list_restaurant' element={<List url={url}/>}/>
          <Route path='/list_foods' element={<ListFood url={url}/>}/>
          <Route path='/add_foods' element={<AddFood url={url}/>}/>
          <Route path='/list_category' element={<CategoryList url={url}/>}/>
          <Route path='/list_users' element={<Users url={url}/>}/>
          <Route path='/list_orders' element={<Order url={url}/>}/>
          <Route path='/add_category' element={<Category_add url={url}/>}/>
          
        </Routes>
      </div>
    </div>
  )
}

export default App
