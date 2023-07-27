import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { TokenContext } from '../App';
import LoginRequest from '../api/LoginRequest';
import { useContext } from 'react';

function LoginPage (props) {
    const [token, setToken] = useContext(TokenContext)
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');
    const navigate = useNavigate();
    
    const handleLogin =(e) => {
        e.preventDefault();
        LoginRequest(password)
        .then(({token})=>{
            setToken(token);
            navigate("/");
        })
        .catch(err=>{
            setError(err.message);
        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <div style={{color:'red'}} >{error}</div>
            <form onSubmit={handleLogin}>
                <input
                    type={'password'}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;