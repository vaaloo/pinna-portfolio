'use client';

import { NextPage } from "next";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import styles from "./Contact.module.scss";

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Contact: NextPage = () => {
    return (
        <>
            <Navbar />
            <main className={styles.contact}>
                <h1 className={styles.title}>CONTACT</h1>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h2>Une question ? Un projet ?</h2>
                        <p>
                            N&apos;hésitez pas à me contacter pour toute collaboration, stage ou échange autour de l’architecture ou de la 3D. Je serai ravi d&apos;échanger avec vous !
                        </p>
                        <ul>
                            <li>
                                <a href="mailto:antoinepinna766@gmail.com" className={styles.link}>
                                    <HiOutlineMail className={styles.icon} />
                                    antoinepinna766@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+33783780583" className={styles.link}>
                                    <HiOutlinePhone className={styles.icon} />
                                    +33 7 83 78 05 83
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/maps?q=Aix-en-Provence,+France"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    <HiOutlineLocationMarker className={styles.icon} />
                                    Aix-en-Provence, France
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>Nom</label>
                            <input id="name" type="text" className={styles.input} placeholder="Votre nom" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input id="email" type="email" className={styles.input} placeholder="Votre email" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" className={styles.textarea} placeholder="Votre message..." rows={6} required />
                        </div>
                        <button type="submit" className={styles.button}>Envoyer</button>
                    </form>
                </div>
            </main>
            <Footer abs={false} />
        </>
    );
};

export default Contact;