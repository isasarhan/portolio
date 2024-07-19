import MenuToggle from "../components/menuToggle/menuToggle";
import { ThemeProvider } from '../context/ThemeContext';
import SidebarProvider from "../context/MenuContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/nav/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='position-relative'>
      <ThemeProvider>
        <SidebarProvider>
          <body>
              <MenuToggle />
            {/* <Navbar/> */}
            {children}
          </body>
        </SidebarProvider>
      </ThemeProvider>
    </html>
  );
}
