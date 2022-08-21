import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import CategoriesContext from './context'
import Login from './pages/login'
import Register from './pages/register'
import SignUp from './pages/signup'
// import Inbox from './pages/inbox'
import Forgotpassword from './pages/forgotPassword'
import Profile from './pages/profile'
import Userlist from './pages/Userlist'
import Workspace from './pages/Workspace'

const App = () => {
  const [categories, setCategories] = useState(null)
  const value = { categories, setCategories }

  return (
    <div className="app1">
      {/* <CategoriesContext.Provider value={value}> */}
       <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/forgot_password' element={<Forgotpassword />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/userlist' element={<Userlist />} />
            <Route path='/Workspace' element={<Workspace />} />
            <Route path='/Workspace/:workspace_id' element={<Workspace />} />
            {/* <Route path="/ticket" element={<TicketPage />} /> */}
            {/* <Route path="/ticket/:id" element={<TicketPage editMode={true} />} /> */}
          </Routes>
      {/* </CategoriesContext.Provider> */}
    </div>
  )
}

export default App
