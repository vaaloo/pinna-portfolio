'use client';

import styles from './Pmr.module.scss';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const Pmr = () => {
    return (
        <>
            <Navbar />
            <main className={styles.pmr}>
                <h1 className={styles.title}>MAISON PMR</h1>

                <section className={styles.plans}>
                    <div className={styles.plan}>
                        <Image src="/images/projets/pmr/plan1.png" alt="Plan RDC" width={600} height={400} />
                        <p>PLAN RDC</p>
                    </div>
                    <div className={styles.plan}>
                        <Image src="/images/projets/pmr/plan2.png" alt="Plan R+1" width={600} height={400} />
                        <p>PLAN R+1</p>
                    </div>
                </section>

                <section className={styles.gallery}>
                    <Image src="/images/projets/pmr/img1.png" alt="Salon" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/pmr/img2.png" alt="Salle à manger" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/pmr/img3.png" alt="Cuisine" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/pmr/img4.png" alt="Salle de bain" width={400} height={300} className={styles.image} />
                </section>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default Pmr;