import { Link, NavLink } from "react-router-dom";

const InternalHeader = () => (
  <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
      <Link to="/" className="font-brush text-2xl font-normal text-foreground" aria-label="TEI home">
        TEI
      </Link>
      <nav className="flex items-center gap-5 font-body text-sm font-semibold uppercase">
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
          Portfolio
        </NavLink>
        <NavLink to="/shop" className={({ isActive }) => isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
          Shop
        </NavLink>
      </nav>
    </div>
  </header>
);

export default InternalHeader;