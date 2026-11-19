import { Link, NavLink } from "react-router";
import { Pizza, ShoppingCart, UserRound, Menu } from "lucide-react";

function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "My Orders", path: "/order/lookup" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#111318]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/20">
            <Pizza size={25} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-black tracking-tight text-white">
            FAST<span className="text-orange-500">PIZZA</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#202630] text-white transition hover:bg-orange-500"
            aria-label="Shopping cart"
          >
            <ShoppingCart size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
              2
            </span>
          </Link>

          <button
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-orange-500 hover:text-orange-500 sm:flex"
            aria-label="User account"
          >
            <UserRound size={20} />
          </button>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#202630] text-white transition hover:bg-orange-500 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
