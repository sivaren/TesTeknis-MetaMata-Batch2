import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import './TulisResep.css';

export default function TulisResep () {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [material, setMaterial] = useState("");
    const [step, setStep] = useState("");
    const [img, setImg] = useState("");
    
    useEffect(function () {
        document.title='Tulis Resep';
    }, []);

    function submitHandler (e) {
        e.preventDefault();

        console.log(title);
        console.log(desc);
        console.log(material);
        console.log(step);
        console.log(img);
    }

    return (
        <div className="page-container">
            <h3 className="header">Tulis Resepmu ...</h3>

            <Form onSubmit={ submitHandler }>
                <Form.Group className="mb-3" controlId="resepTitle">
                    <Form.Label>
                        <h5 className="static-form">Judul</h5> 
                    </Form.Label>
                    <Form.Control type="text" onChange={(e) => { setTitle(e.target.value) }}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="resepDesc">
                    <Form.Label>
                        <h5 className="static-form">Deskripsi</h5> 
                    </Form.Label>
                    <Form.Control type="text" onChange={(e) => { setDesc(e.target.value) }}/>
                </Form.Group>

                <div className="dynamic-form">
                    <h5>Bahan - bahan</h5>
                    <Form.Control className="mb-3" type="text" onChange={(e) => { setMaterial(e.target.value) }}/>
                    <p>+ Item Bahan</p>
                </div>

                <div className="dynamic-form">
                    <h5>Langkah Pembuatan</h5>    
                    <Form.Control className="mb-3" type="text" onChange={(e) => { setStep(e.target.value) }}/>
                    <p>+ Item Langkah</p>
                </div>

                <Form.Group className="mb-3" controlId="resepPict">
                    <Form.Label> 
                        <h5 className="static-form">Upload Foto Masakan</h5> 
                    </Form.Label>
                    <Form.Control type="text" onChange={(e) => { setImg(e.target.value) }}/>
                </Form.Group>

                <button className="submit-btn mt-4" type="submit">Terbitkan Resep</button>
            </Form>
        </div>
    );
}
