import './Card.css';

export default function Card ({resep, recipes, plusLike}) {
    function likeButton (id) {
        const tempRecipes = [...recipes];
        tempRecipes[id].likes++;
        plusLike(tempRecipes);
    }    

    return (
        <div className="card-container">
            <img className="card-image" src={resep.image} alt={resep.title}></img>
            <div className="card-text">
                <div className="likes-count"><p>{resep.likes} Orang Menyukai ini</p></div>
                <h5>{resep.title}</h5>
                <p>{resep.desc}</p>
            </div>

            <button className="card-btn" onClick={() => {likeButton(resep.id)}}>Suka</button>
        </div>
    );
}
