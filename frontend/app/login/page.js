'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
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
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '70vh' }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
      </Box>
      <form onSubmit={handleLogin}>
        {error && (
          <Typography variant="body2" color="error" sx={{ mb: 2, textAlign: 'center' }}>
            {error}
          </Typography>
        )}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Container>
  );
}
