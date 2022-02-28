import './Home.css'
import Card from '../../components/Card/Card'

export default function Home () {
    return (
        <div className="page-container">
            <h4>Resep Terbaru</h4>
            <div className="recipes">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}
