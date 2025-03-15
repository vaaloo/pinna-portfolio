"use client";

import {NextPage} from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import SubHeader from "@/app/components/SubHeader/SubHeader";
import styles from "@/app/styles/page.module.scss";
import Link from "next/link";
import Footer from "@/app/components/Footer/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Navbar />
            <SubHeader />
            <main className={styles.main} id={'main'}>
                <h1 className={styles.about_me_title}>ABOUT ME</h1>
                <div className={styles.content_container}>
                    <div className={styles.desc_container}>
                        <h2>Qui suis-je ?</h2>
                        <p>
                            Je suis Antoine, un <b>étudiant</b> en <b>école d&apos;architecture</b>. Passionné par le design et la conception, j&apos;ai eu l&apos;opportunité de travailler sur plusieurs <Link href={'/projects'}>projets</Link> académiques et professionnels, que vous pouvez retrouver sur ma page de portfolio.
                            J&apos;ai commencé à explorer les logiciels 3D avec <b>Revit</b>, <b>Twinmotion</b> et <b>Archicad</b>, avant d&apos;élargir mes compétences lors de mes stages, où j&apos;ai pu apprendre et pratiquer <b>Rhino</b> ou encore des logiciel de la suite Adobe tel que <b>Illustrator</b> ou encore <b>InDesign</b>. Mon intérêt pour la modélisation et la visualisation architecturale ne cesse de croître, et j&apos;aime expérimenter de nouvelles approches pour donner vie aux projets.
                            Si vous souhaitez en savoir plus ou échanger avec moi, n’hésitez pas à <b>me contacter</b> via <Link href={'/contact'}> ma page dédiée </Link> !
                        </p>

                    </div>
                    <div className={styles.skills_all_container}>
                        <h2>Skills</h2>
                        <div className={styles.skills_container}>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>Archicad</p>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>Twinmotion</p>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>Revit</p>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>Rhino3D</p>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>In Design</p>
                            </div>
                            <div className={styles.skills}>
                                <div className={styles.skills_img}></div>
                                <p>Illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Home;