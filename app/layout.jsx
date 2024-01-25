import Navbar from "@/components/ui/Navbar";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: "YasFlix",
    descrption:
        "YasFlix is a comprehensive online platform that provides a vast collection of movie metadata. Explore detailed information about your favorite movies, including release dates, genres, cast and crew details, plot summaries, and user ratings. Whether you're a film enthusiast, critic, or casual viewer, MovieHub offers a user-friendly experience to discover, analyze, and keep track of the latest and classic movies.",
};

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
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
