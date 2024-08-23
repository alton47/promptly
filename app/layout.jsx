import '@styles/globals.css'; // Correct import path with forward slash

export const metadata = {
  title: 'Promptly',
  description: 'Discover and share AI prompts',
};

// The RootLayout receives and renders `children` as a prop
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {children}  
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
