import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth.js';


const LoginForm = () => {
const [credentials, setCredentials]=useState({username: '', password: ''});

handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
};

login = e => {
e.preventDefault();

axiosWithAuth()
.post('/login', credentials)
.then(res => {
    console.log(res.data.payload);
    localStorage.setItem('token', res.data.payload);
    props.history.push('/protected');
})
.catch(err => console.log(err));

};


    return(
        <form onSubmit={login}>
            <fieldset>
                    <input
                    type="text"
                        name="name"
                        placeholder="name here"
                        value={credentials.username}
                        onChange={handleChange}
                    />

                    <input
                        type="password" 
                        name="password"
                        placeholder="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />

                    <button
                    type="submit"
                    className="login-btn"
                    >login button</button>
            </fieldset>
        </form>
    )
}

export default LoginForm;