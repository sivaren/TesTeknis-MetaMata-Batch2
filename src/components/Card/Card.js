import './Card.css'

export default function Card () {
    return (
        <div className="card-container">
            <div className="card-image"></div>
            <div className="card-text">
                <div className="likes-count"><p>2 Orang Menyukai ini</p></div>
                <h5>Sambal jamur ala SS</h5>
                <p>lorem ipsum lorem ipsum lorem</p>
            </div>

            <button className="card-btn">Suka</button>
        </div>
    );
}
