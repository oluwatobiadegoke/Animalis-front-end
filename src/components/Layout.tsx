import Navbar from "./Navigator/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <main className="relative font-pri bg-gradient-to-tr from-[rgb(15,23,42)] via-[rgb(23,49,77)] to-teal-800 min-h-screen overflow-y-auto w-full">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
