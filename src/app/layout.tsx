import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

import { Providers } from "./providers";
import CustomNavbar from "@/shared/components/Navbar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <CustomNavbar />
                    <div className="flex m-auto lg:w-6/12 md:w-6/12">
                        {children}
                    </div>
                </Providers>
                <div id="overlays"></div>
            </body>
        </html>
    );
}
