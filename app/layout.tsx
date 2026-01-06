import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="pt-20 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
