import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Context
import { RoleProvider } from './context/RoleContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

//Pages
import Users from './pages/UsersPage.jsx'
import UserCreate from './pages/UserCreatePage.jsx'
import UserUpdate from './pages/UserUpdatePage.jsx'

import Roles from './pages/RolesPage.jsx'
import RoleCreate from './pages/RoleCreatePage.jsx'
import RoleUpdate from './pages/RoleUpdatePage.jsx'

//Menú
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <RoleProvider>
      <UserProvider>
        <BrowserRouter>
          <div className="flex">
            <Navbar />
            <main className='container mx-auto px-10 flex-grow'>
              <Routes>
                <Route path='/' element={<h1>DASHBOARD</h1>} />
                <Route path='/user' element={<Users />} />
                <Route path='/add_user' element={<UserCreate />} />
                <Route path='/update_user' element={<UserUpdate />} />
                <Route path='/role' element={<Roles />} />
                <Route path='/add_role' element={<RoleCreate />} />
                <Route path='/update_role' element={<RoleUpdate />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </UserProvider>
    </RoleProvider>
  )
}

export default App
