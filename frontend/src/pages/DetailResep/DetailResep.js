import { useEffect } from 'react';

import './DetailResep.css';

export default function DetailResep () {
    useEffect(function () {
        document.title='Detail Resep';
    }, []);

    return (
        <div className="page-container">
            <img className="resep-image" src="https://cdn.pixabay.com/photo/2020/02/02/15/07/meat-4813261_960_720.jpg" alt=""/>
            <div className="resep-detail">
                <h2>French Steak</h2>
                <p>Steak daging yang sangat lembut, empuk, daging diimpor langsung dari Perancis</p>
                
                <h3>Bahan - bahan</h3>
                <ul>
                    <li>150 gram jamur tiram</li>
                    <li>500 gram sirloin</li>
                </ul>

                <h3>Langkah Pembuatan</h3>
                <ol>
                    <li>Cuci jamur nya</li>
                    <li>Dimarinasi dagingnya</li>
                    <li>Panaskan wajan</li>
                    <li>Kasih mentega di wajan</li>
                    <li>Masak dagingnya, tunggu hingga 30 menit</li>
                    <li>French Steak siap disajikan!</li>
                </ol>
            </div>
        </div>
    );
}
