import { useState, useCallback, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = ['Home', 'Menu', 'About', 'Contact'] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  /* Close drawer on Escape */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, close]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" id="navbar-logo">
          Kopi<span className="navbar__logo-accent">Senja</span>
        </a>

        <ul
          className={`navbar__links${open ? ' navbar__links--open' : ''}`}
          id="navbar-menu"
        >
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="navbar__link"
                id={`nav-link-${item.toLowerCase()}`}
                onClick={close}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Overlay behind drawer on mobile */}
        <div
          className={`navbar__overlay${open ? ' navbar__overlay--visible' : ''}`}
          onClick={close}
          aria-hidden="true"
        />

        <button
          className="navbar__toggle"
          id="navbar-toggle"
          aria-expanded={open}
          aria-controls="navbar-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>
    </nav>
  );
}
