"use client"
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar"
import { SidebarProvider } from "@/context/SidebarContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout">
        <SidebarProvider>
          <Sidebar/>
          <div >
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
