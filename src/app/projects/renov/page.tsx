'use client';

import Image from 'next/image';
import styles from './Renov.module.scss';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';

const RenovationPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.renov}>
                <h1 className={styles.title}>Rénovation</h1>

                <div className={styles.grid3}>
                    <Image src="/images/projets/renov/1.png" alt="Photo 1" width={600} height={400} className={styles.image} />
                    <Image src="/images/projets/renov/2.png" alt="Photo 2" width={600} height={400} className={styles.image} />
                    <Image src="/images/projets/renov/3.png" alt="Photo 3" width={600} height={400} className={styles.image} />
                </div>

                <div className={styles.full}>
                    <Image src="/images/projets/renov/4.png" alt="Photo 4" width={1800} height={600} className={styles.image} />
                </div>

                <div className={styles.grid2}>
                    <Image src="/images/projets/renov/5.png" alt="Photo 5" width={900} height={600} className={styles.image} />
                    <Image src="/images/projets/renov/6.png" alt="Photo 6" width={900} height={600} className={styles.image} />
                </div>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default RenovationPage;