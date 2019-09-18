import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';


const LoginForm = (props) => {
const [credentials, setCredentials]= useState({username: '', password: ''});

const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
};

const login = e => {
e.preventDefault();

axiosWithAuth()
.post('/login', credentials)
.then(res => {
    console.log(res.data.payload);
    localStorage.setItem('token', res.data.payload);
    props.history.push('/friendsList');
})
.catch(err => console.log(err));

};


    return(
        <form onSubmit={login}>
            <fieldset className="login-form">
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        placeholder="name here"
                        value={credentials.username}
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="password" 
                        name="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <button
                    className="form-btn"
                    type="submit"
                    >login button</button>
            </fieldset>
        </form>
    )
}

export default LoginForm;