import Navbar from "@/components/ui/Navbar";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/ui/footer";

export const metadata = {
    title: "YasFlix",
    descrption:
        "YasFlix is a comprehensive online platform that provides a vast collection of movie metadata. Explore detailed information about your favorite movies, including release dates, genres, cast and crew details, plot summaries, and user ratings. Whether you're a film enthusiast, critic, or casual viewer, MovieHub offers a user-friendly experience to discover, analyze, and keep track of the latest and classic movies.",
    openGraph: {
        images: [
            {
                url: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ],
    },
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
