import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar () {
    return (
        <div className="nav-container py-3">
            <div className="nav-brand me-auto">
                <Link to='/home' className="nav-brand-item me-auto"> <h3 className="m-0">Resepku</h3> </Link> 
            </div>
            <div className="nav">
                <Link to="/tulis-resep" className="nav-item">Tulis Resep</Link>
                <Link to="/" className="nav-item">Logout</Link>
            </div>
        </div>
    );
}
