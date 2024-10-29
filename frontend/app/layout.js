import { CssBaseline, Container, Typography, Box } from '@mui/material';

export const metadata = {
  title: 'Real-Time Comments System',
  description: 'A real-time comments system with Socket.IO and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', margin: 0 }}>
        <CssBaseline />
        <Container
          maxWidth="md"
          sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}
        >
          <Box
            component="header"
            sx={{
              py: 2,
              textAlign: 'center',
              borderBottom: '1px solid #e0e0e0',
              mb: 4,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Comment System
            </Typography>
          </Box>

          <Box component="main" sx={{ flex: '1 0 auto' }}>
            {children}
          </Box>
        </Container>

        <Box
          component="footer"
          sx={{
            py: 2,
            textAlign: 'center',
            borderTop: '1px solid #e0e0e0',
            mt: 'auto', // This makes the footer stick to the bottom when content is less
          }}
        >
          <Typography variant="body2" color="textSecondary">
            Powered by Next.js and Socket.IO
          </Typography>
        </Box>
      </body>
    </html>
  );
}
