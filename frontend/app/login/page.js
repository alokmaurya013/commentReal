'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container } from '@mui/material';
import axios from 'axios';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null); // State to handle errors
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    try {
      // Call API to generate sessionId
      const { data } = await axios.post('/api/auth', { username }); // Use the correct endpoint


      localStorage.setItem('sessionId', data.sessionId);
      localStorage.setItem('username', username);

      router.push('/comments');
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.'); // Set error message
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
}
