import { useState, useEffect } from 'react';

import Card from '../../components/Card/Card';
import resep from '../../utils/resep';

import './Home.css';

export default function Home () {
    const [recipes, setRecipes] = useState(resep);

    useEffect(function () {
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
