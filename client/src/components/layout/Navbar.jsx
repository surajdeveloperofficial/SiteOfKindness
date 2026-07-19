import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-400"
        >
          ❤️ SiteOfKindness
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link to="/" className="hover:text-emerald-400">
            Home
          </Link>

          <Link to="/about" className="hover:text-emerald-400">
            About
          </Link>

          <Link to="/contact" className="hover:text-emerald-400">
            Contact
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="rounded-lg border border-emerald-400 px-4 py-2 hover:bg-emerald-400 hover:text-black">
            Login
          </button>

          <button className="rounded-lg bg-emerald-500 px-4 py-2 text-black font-semibold hover:bg-emerald-400">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;