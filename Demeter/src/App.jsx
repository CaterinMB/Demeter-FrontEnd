import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Context
import { ProductCategoriesProvider } from './context/ProductCategoriesContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import  {SaleProvider} from './context/SaleContext.jsx'

//Pages
import Sales from './pages/sales.jsx'

//Menú
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <BrowserRouter>
    <ProductProvider>
      <ProductCategoriesProvider>
        <SaleProvider>
        <div className="flex">
          <Navbar />
          <main className='container mx-auto px-10 flex-grow'>
            <Routes>
              <Route path='/' element={<h1>DASHBOARD</h1>} />
              <Route path='/sales' element={<Sales />} />
            </Routes>
          </main>
        </div>
        </SaleProvider>
      </ProductCategoriesProvider>
    </ProductProvider>
    </BrowserRouter>
  );
}
export default App
