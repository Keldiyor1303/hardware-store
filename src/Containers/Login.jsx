import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import API from '../utils/axios';

import Zoom from 'react-reveal/Zoom';

const Login = ({ themeChange }) => {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const [paragraf, setParagraf] = useState("")

    const navigate = useNavigate()

    function submit() {
        API.post("login", {
            username: login,
            password: password
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("username", res.data.user.username)
            navigate("/adminPanel")
        })
            .catch(error => setParagraf("Mazkur admin topilmadi!!!"))
    }

    return (
        <Wrapper themeChange={themeChange}>
            <Zoom bottom cascade>
                <div className="form">
                    <p className='paragraf'>{paragraf}</p>
                    <TextField focused required className='input' color={paragraf ? "error" : "success"} type="text" label="Admin nomi" variant="outlined" onChange={({ target }) => setLogin(target.value)} />
                    <TextField focused required className='input' color={paragraf ? "error" : "success"} type="password" label="Parol" variant="outlined" onChange={({ target }) => setPassword(target.value)} />
                    <Button variant="contained" color="success" className='btn' onClick={submit}>Kirish</Button>
                </div>
            </Zoom>
        </Wrapper>
    );
}

export default Login;

const Wrapper = styled.div`
    padding: 40px;
    min-height: calc(100vh - 100px);
    background-color: white;
    .form {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 32px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .btn, .input {
        width: 100%;
        height: 50px;
    }   
    
    .paragraf {
        font-size: 1.5rem;
        color: red;
    }
  
`

