import Link from "next/link";
import {FaInstagram} from "react-icons/fa";
import styles from "./Navbar.module.scss";
import {usePathname} from "next/navigation";

const Navbar: React.FC = () => {
    const route = usePathname();
    return (
        <div className={styles.navbar}>
            <h1>Antoine PINNA</h1>
            <nav>
                <ul>
                    <li>
                        <Link href={"/"} className={route === '/' ? styles.active : ''}>Accueil</Link>
                    </li>
                    <li>
                        <Link href={"/projects"} className={route === '/projects' ? styles.active : ''}>Projets</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className={route === '/contact' ? styles.active : ''}>Contact</Link>
                    </li>
                    <li>
                        <Link href={'/others'} className={route === '/others' ? styles.active : ''}>Autres</Link>
                    </li>
                </ul>
            </nav>
            <FaInstagram className={styles.insta_icon}/>
        </div>
    );
}

export default Navbar;