import React, { useState } from 'react';
import { loginUser } from '../api/authApi';

// LoginPage component for user login
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser({ email, password });
    if (success) {
      window.location.href = '/';
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full bg-green-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
