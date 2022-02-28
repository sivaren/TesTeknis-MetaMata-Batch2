import { Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import TulisResep from './pages/TulisResep/TulisResep'
import DetailResep from './pages/DetailResep/DetailResep'

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/tulis-resep' element={ <TulisResep/> } />
          <Route path='/:detail-resep' element={ <DetailResep/> } />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
