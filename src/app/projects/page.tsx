'use client';

import Navbar from "@/app/components/Navbar/Navbar";
import Image from "next/image";
import styles from "./Projects.module.scss";
import Footer from "@/app/components/Footer/Footer";
import { useRouter } from "next/navigation";

const projectList = [
    { title: "Maison PMR", image: "/images/pmr.png", path: "/projects/pmr" },
    { title: "Éco Quartier", image: "/images/eco.png", path: "/projects/eco" },
    { title: "Rénovation", image: "/images/renov.png", path: "/projects/renov" },
    { title: "Hackaton", image: "/images/hackathon.png", path: "/projects/hackathon" },
];

const Projects: React.FC = () => {
    const router = useRouter();

    return (
        <>
            <Navbar />
            <main className={styles.container}>
                <h1 className={styles.heading}>Mes projets</h1>
                <div className={styles.grid}>
                    {projectList.map((project, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            onClick={() => router.push(project.path)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={`Image de ${project.title}`}
                                    width={600}
                                    height={400}
                                    className={styles.image}
                                />
                                <div className={styles.overlay}>
                                    <h2>{project.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.others}>
                        <h2>Autres projets</h2>
                    </div>
                </div>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default Projects;