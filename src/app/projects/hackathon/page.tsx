'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '@/app/components/Navbar/Navbar';
import Footer from '@/app/components/Footer/Footer';
import styles from './Hackathon.module.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configuration du worker PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

const Hackathon = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <>
            <Navbar />
            <main className={styles.hackathon}>
                <h1 className={styles.title}>Hackathon</h1>

                <div className={styles.pdfWrapper}>
                    <Document
                        file="/images/projets/hackathon/pdf/hackathon.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading="Chargement du rapport..."
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>

                    {numPages && (
                        <div className={styles.pagination}>
                            <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1}>
                                ←
                            </button>
                            <span>
                Page {pageNumber} / {numPages}
              </span>
                            <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages}>
                                →
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default Hackathon;