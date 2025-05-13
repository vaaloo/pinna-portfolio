'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.navbar}>
            <div className={styles.left}>
                <h1 className={styles.title}>Antoine PINNA</h1>
            </div>

            <nav className={`${styles.center} ${menuOpen ? styles.hidden : ''}`}>
                <ul>
                    <li>
                        <Link href="/" className={pathname === "/" ? styles.activeLink : ""}>Accueil</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={pathname.includes("/projects") ? styles.activeLink : ""}>Projets</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={pathname === "/contact" ? styles.activeLink : ""}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.right}>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.insta_icon} ${menuOpen ? styles.hidden : ''}`}
                >
                    <FaInstagram />
                </a>
                <button className={styles.burger} onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li>
                            <Link href="/" onClick={closeMenu} className={pathname === "/" ? styles.activeLink : ""}>Accueil</Link>
                        </li>
                        <li>
                            <Link href="/projects" onClick={closeMenu} className={pathname.includes("/projects") ? styles.activeLink : ""}>Projets</Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={closeMenu} className={pathname === "/contact" ? styles.activeLink : ""}>Contact</Link>
                        </li>
                    </ul>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={styles.mobileInsta} />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Navbar;