import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate authentication with predefined values
        if (email === 'admin@gmail.com' && password === 'password') {
            navigate('/feature-selection');
            // Successful login, you can redirect the user or perform further actions here
            alert('Login successful!');
        } else {
            // Display an error message for incorrect credentials
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="login-page">
            <h1>Login</h1>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
