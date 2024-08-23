import '@styles/globals.css'; // Correct import path with forward slash
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptly',
  description: 'Discover and share AI prompts',
};

// The RootLayout receives and renders `children` as a prop
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}  
        </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
