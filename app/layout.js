import Navbar from "@/components/ui/Navbar";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
