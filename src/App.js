import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <BrowserRouter>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/sign-up' element={<SignUp/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
        
    
  );
}

export default App;
