import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p>Made by <Link href={'https://vaaloo.fr'}>Valoo</Link></p>
            <p>© Copyright 2025</p>
        </footer>
    )
}

export default Footer;