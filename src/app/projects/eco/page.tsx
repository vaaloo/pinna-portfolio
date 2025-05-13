'use client';

import styles from './EcoQuartier.module.scss';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const Eco = () => {
    return (
        <>
            <Navbar />
            <main className={styles.eco}>
                <h1 className={styles.title}>ECO - QUARTIER</h1>

                <section className={styles.coupes}>
                    <div className={styles.coupe}>
                        <Image src="/images/projets/ecoquartier/coupe1.png" alt="Coupe AA′" width={1200} height={300} />
                        <p>Coupe AA′</p>
                    </div>
                    <div className={styles.coupe}>
                        <Image src="/images/projets/ecoquartier/coupe2.png" alt="Coupe BB′" width={1200} height={300} />
                        <p>Coupe BB′</p>
                    </div>
                </section>

                <section className={styles.gallery}>
                    <Image src="/images/projets/ecoquartier/img1.png" alt="Salon" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/ecoquartier/img2.png" alt="Salle à manger" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/ecoquartier/img3.png" alt="Vue extérieure 1" width={400} height={300} className={styles.image} />
                    <Image src="/images/projets/ecoquartier/img4.png" alt="Vue extérieure 2" width={400} height={300} className={styles.image} />
                </section>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default Eco;