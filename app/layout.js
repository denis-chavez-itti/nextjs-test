import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Test",
  description: "test app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout></MainLayout>
      </body>
    </html>
  );
}
