import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ezeX - Crystal Clear Exchange",
    description: "Powered by Pactus Team",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en" className="dark">
            <Providers>
                <body
                    className={`${inter.variable} ${robotoMono.variable} min-h-svh max-w-screen font-sans antialiased`}
                >
                    {children}

                    {/* [DOC]: Toaster should be placed in body tag not HTML */}
                    <Toaster richColors position="bottom-right" />
                </body>
            </Providers>
        </html>
    );
};

export default RootLayout;
