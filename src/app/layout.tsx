import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Geist, Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Gilbert Tiofandy",
  description: "Gilbert Tiofandy Personal's Website",
};

const poppins = Poppins({
  subsets: ["latin"], // Untuk dukungan karakter
  weight: ["400", "600", "700"], // Pilih bobot font yang diperlukan
  style: ["normal", "italic"], // Pilih gaya normal atau miring
  display: "swap", // Optimasi rendering
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} ${geistSans.variable} antialiased  transition`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
