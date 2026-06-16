import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n/language-hooks";

export default function Navbar() {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/routes", label: t.nav.routes },
    { to: "/checkup", label: t.nav.checkup },
    { to: "/tcm", label: t.nav.tcm },
    { to: "/about", label: t.nav.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-teal-600 text-white flex items-center justify-center font-display font-bold text-lg">
            YW
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-base text-slate-900">
              {t.brand.tagline}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-teal-700 font-semibold">
              {t.brand.subtag}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm font-semibold tracking-wide transition-colors ${
                  isActive ? "text-teal-700" : "text-slate-700 hover:text-teal-700"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-md shadow-teal-600/20"
          >
            <Phone size={14} />
            <span>{t.cta.bookConsult}</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label="toggle menu"
            className="text-slate-800 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[500px]" : "max-h-0"
        } bg-white border-t border-slate-200`}
      >
        <nav className="container flex flex-col py-4 gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `py-3 text-base font-semibold border-b border-slate-100 ${
                  isActive ? "text-teal-700" : "text-slate-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/about#contact"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-teal-600 text-white py-3 text-sm font-semibold rounded-full"
          >
            <Phone size={14} />
            <span>{t.cta.bookConsult}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
