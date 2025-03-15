'use client';

import Navbar from "@/app/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./Projects.module.scss";
import Footer from "@/app/components/Footer/Footer";

const Projects: React.FC = () => {
    return (
        <>
            <div>
                <Navbar/>
                <div className={styles.projects}>
                    <div className={styles.project}>
                        <Image
                            src={'/images/pmr.png'}
                            alt={'projet pmr'}
                            width={500}
                            height={300}
                        ></Image>
                        <h2>Maison PMR</h2>
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/images/eco.png'}
                            alt={'projet pmr'}
                            width={500}
                            height={300}
                        ></Image>
                        <h2>Éco Quartier</h2>
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/images/renov.png'}
                            alt={'projet pmr'}
                            width={500}
                            height={300}
                        ></Image>
                        <h2>Rénovation</h2>
                    </div>
                    <div className={styles.project}>
                        <Image
                            src={'/images/hackaton.png'}
                            alt={'projet pmr'}
                            width={500}
                            height={300}
                        ></Image>
                        <h2>Hackaton</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Projects;