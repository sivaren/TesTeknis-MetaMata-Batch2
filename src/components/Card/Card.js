import './Card.css';

export default function Card ({resep, recipes, plusLike}) {
    function likeHandler (id) {
        const tempRecipes = [...recipes];
        tempRecipes[id].suka++;
        plusLike(tempRecipes);
    }    

    return (
        <div className="card-container">
            <img className="card-image" src={resep.foto} alt={resep.nama} />
            <div className="card-text">
                <div className="likes-count"><p>{resep.suka} Orang Menyukai ini</p></div>
                <h5>{resep.nama}</h5>
                <p>{resep.deskripsi}</p>
            </div>
            <button className="card-btn" onClick={() => {likeHandler(resep.id-1)}}>Suka</button>
        </div>
    );
}
