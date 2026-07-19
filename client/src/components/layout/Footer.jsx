function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-slate-400">
        <p>© {new Date().getFullYear()} SiteOfKindness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;