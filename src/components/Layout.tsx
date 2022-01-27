const Layout: React.FC = ({ children }) => {
  return (
    <main className="bg-gradient-to-tr from-black via-teal-800 to-yellow-800 min-h-screen w-full">
      {children}
    </main>
  );
};

export default Layout;
