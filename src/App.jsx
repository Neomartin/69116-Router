import React from 'react'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Header from './layout/header/Header'
import Footer from './layout/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './pages/product-detail/ProductDetail'
import AdminGuard from './guard/AdminGuard'

export default function App() {
  return (
    <>

        <Header></Header>

        <main className='container'>
          <aside>
            SIDEBAR
          </aside>
          <div className="main-container">

              <Routes>
                  <Route path="/" element={ <Home /> } />
                  
                  <Route path='/contact' element={ <Contact /> } />

                  <Route path='/about' element={ <About /> } />

                  <Route path='/product-detail/:id/:order?' element={ <ProductDetail />  }  />

                  <Route path='/admin-product' 
                          element={ 
                              <AdminGuard>
                                <Admin />
                              </AdminGuard>
                          }  
                  />

                  <Route path='*' element={ <h1>NOT FOUND </h1> } />
                  
              </Routes>

          </div>

         
        </main>
        
        <Footer></Footer>

    </>
  )
}
