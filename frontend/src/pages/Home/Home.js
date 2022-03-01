import { useState, useEffect } from 'react';

import Card from '../../components/Card/Card';
import './Home.css';

export default function Home () {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getRecipes () {
            const request = await fetch('http://127.0.0.1:8000/api/resep');
            const response = await request.json();
            
            setRecipes(response);
            setLoading(false);
        }
        getRecipes();
        document.title='Home';
    }, []);

    return (
        <div className="page-container">
            <h4>Resep Terbaru</h4>
                {loading ? (<i>loading recipes</i>)
                : (
                    <div className="recipes">
                        {recipes.map((item,idx) => {
                            return (
                                <Card key={idx} resep={item} recipes={recipes} plusLike={setRecipes} />
                            );
                        })}
                    </div>
                )}
        </div>
    );
}
