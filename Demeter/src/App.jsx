import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Context
import { RoleProvider } from './context/RoleContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

//Pages
import UsersPage from './pages/UsersPage.jsx'
import UserAddPage from './pages/UserAddPage.jsx'
import UserUpdatePage from './pages/UserUpdatePage.jsx'

//Menú
import Navbar from './components/Menú/Navbar.jsx'

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
                <Route path='/user' element={<UsersPage />} />
                <Route path='/add_user' element={<UserAddPage />} />
                <Route path='/update_user' element={<UserUpdatePage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </UserProvider>
    </RoleProvider>
  )
}

export default App
