import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "@/i18n/LanguageContext";

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-smoke-50/90 backdrop-blur-md border-b border-ink-100/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="group flex items-center gap-3">
          <div className="seal">渝</div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-[15px] text-ink-800 tracking-wide">
              {t.brand.tagline}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-ink-400 font-display">
              {t.brand.subtag}
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm tracking-wider transition-colors ${
                  isActive ? "text-cinnabar" : "text-ink-700 hover:text-cinnabar"
                }`
              }
            >
              {({ isActive }) => (
                <span className="flex flex-col items-center">
                  <span>{l.label}</span>
                  <span
                    className={`mt-1 h-px w-4 transition-all ${
                      isActive ? "bg-cinnabar w-8" : "bg-transparent"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            to="/about#contact"
            className="group inline-flex items-center gap-2 border border-ink-800 text-ink-800 px-4 py-2 text-sm tracking-wider hover:bg-ink-800 hover:text-smoke-50 transition-colors"
          >
            <Compass size={14} />
            <span>{t.nav.book}</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            aria-label="toggle menu"
            className="text-ink-800 p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        } bg-smoke-50/95 backdrop-blur-md border-b border-ink-100/60`}
      >
        <nav className="container flex flex-col py-4 gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `py-3 text-base tracking-wider border-b border-ink-100/50 ${
                  isActive ? "text-cinnabar" : "text-ink-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/about#contact"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-ink-800 text-smoke-50 py-3 text-sm tracking-widest"
          >
            <Compass size={14} />
            <span>{t.nav.book}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
