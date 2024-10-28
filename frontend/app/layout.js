import { CssBaseline, Container } from '@mui/material';

export const metadata = {
  title: 'Real-Time Comments System',
  description: 'A real-time comments system with Socket.IO and Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <CssBaseline />
        <Container maxWidth="md">
          <header>
            <h1>Comment System</h1>
          </header>
          <main>{children}</main>
          <footer>
            <p>Powered by Next.js and Socket.IO</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
