import Navbar from "./Navbar";
function Layout({ children }) {
  return (
   <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default Layout;