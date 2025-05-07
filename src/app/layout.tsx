import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { HeaderMain } from "@/components/header/headerMain";
import { Footer } from "@/components/footer/footer";


const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Teach",
    description: "Buzzvel-FE - Teste 2025",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className="vsc-initialized"
                cz-shortcut-listen="true"
            >   
                <HeaderMain />
                {children}
                <Footer />
            </body>
        </html >
    );
}
