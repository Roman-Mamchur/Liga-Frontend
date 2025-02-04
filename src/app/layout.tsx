import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Layout/Sidebar/Sidebar";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ReduxProvider from "@/components/Redux/ReduxProvider";
import PromotionModal from "@/components/Modal/PromotionModal";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FaFa878",
  description: "Online Casino Games and Sports Betting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.variable} h-full font-[family-name:var(--font-poppins)] antialiased`}
      >
        <ReduxProvider>
          <div className="flex h-full">
            <aside>
              <Sidebar />
            </aside>

            <main className="flex h-full w-full flex-col">
              <Header />
              <div className="flex flex-1 flex-col overflow-y-auto pb-14 md:pb-0">
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </main>

            <PromotionModal />
          </div>
          <ToastContainer
            autoClose={2000}
            draggable={true}
            position="top-right"
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
