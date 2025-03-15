import styles from "./SubHeader.module.scss";

const SubHeader: React.FC = () => {
    return (
        <div className={styles.subheader}>
            <div className={styles.video_container}>
                <video autoPlay loop muted className={styles.video}>
                    <source src="/videos/header.webm"/>
                </video>
                <button className={styles.discover_button}><a href={'#main'}>Découvrir</a></button>
            </div>
        </div>
    );
}

export default SubHeader;