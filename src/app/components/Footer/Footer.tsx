import styles from "./Footer.module.scss";
import Link from "next/link";

interface FooterProps {
    abs: boolean;
}

const Footer: React.FC<FooterProps> = ({abs = false}) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={abs ? styles.footer_abs : styles.footer}>
            <p>Made by <Link href={'https://vaaloo.fr'}>Valoo</Link></p>
            <p>© Copyright {currentYear}</p>
        </footer>
    )
}

export default Footer;