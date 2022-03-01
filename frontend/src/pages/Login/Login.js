import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import './Login.css';

export default function Login () {

    useEffect(function () {
        document.title='Login';
    }, []);

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <h4>Login Page</h4>
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label> <h5>Username</h5> </Form.Label>
                            <Form.Control type="text" placeholder="Username" onChange={(e) => {}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label> <h5>Password</h5> </Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => {}}/>
                        </Form.Group>
                        <Link to="/home">
                            <button className="login-btn" type="submit">Login</button>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );
}
