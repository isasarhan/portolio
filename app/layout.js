import Navbar from "../components/nav/navbar";
import { ThemeContext, ThemeProvider } from '../context/ThemeContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";


export default function RootLayout({ children }) {

  return (
    <html lang="en" className='position-relative'>
      <ThemeProvider>
        <body>
          <Navbar  />
          {children}
        </body>
      </ThemeProvider>

    </html>
  );
}
