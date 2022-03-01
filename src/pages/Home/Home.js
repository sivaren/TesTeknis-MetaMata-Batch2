import { useState, useEffect } from 'react';

import Card from '../../components/Card/Card';

import './Home.css';

export default function Home () {
    const [recipes, setRecipes] = useState([]);

    useEffect(function () {
        async function getRecipes () {
            const request = await fetch('http://127.0.0.1:8000/api/resep');
            const response = await request.json();
            
            setRecipes(response);
        }

        getRecipes();
        document.title='Home';
    }, []);

    return (
        <div className="page-container">
            <h4>Resep Terbaru</h4>
            <div className="recipes">
                {recipes.map((item,idx) => {
                    return (
                        <Card key={idx} resep={item} recipes={recipes} plusLike={setRecipes} />
                    );
                })}
            </div>
        </div>
    );
}
