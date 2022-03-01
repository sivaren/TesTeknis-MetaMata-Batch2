import { useEffect } from 'react';

import './DetailResep.css';

export default function DetailResep () {
    useEffect(function () {
        document.title='Detail Resep';
    }, []);

    return (
        <>  
            <div className="page-container">
                <div className="resep-image"></div>
                <div className="resep-detail">
                    <h2>Sambal jamur ala SS</h2>
                    <p>lorem psumlorem psumlorem psumlorem psumlorem psumlorem psum</p>
                    
                    <h3>Bahan - bahan</h3>
                    <ul>
                        <li>150 gram jamur tiram</li>
                        <li>3 buah cabe rawit keriting</li>
                    </ul>

                    <h3>Langkah Pembuatan</h3>
                    <ol>
                        <li>Cuci jamur ayam</li>
                        <li>Langsung goreng cuy</li>
                    </ol>
                </div>
            </div>
        </>
    );
}
