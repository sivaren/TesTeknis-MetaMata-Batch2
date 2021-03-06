import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import TulisResep from './pages/TulisResep/TulisResep';
import DetailResep from './pages/DetailResep/DetailResep';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="content">
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='/home' element={ <Home/> } />
          <Route path='/tulis-resep' element={ <TulisResep/> } />
          <Route path='/detail-resep' element={ <DetailResep/> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
