import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Sending request...');
    
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Response:', response.data);
      setMessage(response.data.message);
      
    } catch (error) {
      console.error('Error details:', error);
      setMessage(error.response?.data?.error || 'An error occurred during signup');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
