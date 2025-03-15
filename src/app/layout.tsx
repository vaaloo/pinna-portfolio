import type {Metadata} from "next";
import {Jura} from "next/font/google"
import "./styles/globals.scss";

export const metadata: Metadata = {
    title: "Antoine PINNA",
    description: "Portfolio officiel d'Antoine PINNA",
}

const jura = Jura({
    subsets: ["latin"],
    style: "normal",
    weight: ["400", "700"],
});

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={jura.className}>
        {children}
        </body>
        </html>
    );
}