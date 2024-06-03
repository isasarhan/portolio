import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import Navbar from "../components/nav/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='position-relative'>
      <Navbar />
      <body>
        {children}
      </body>
      <footer>
        <div className='text-white ms-auto position-absolute designer'>
          this website was designed by Issa Serhan using Next JS
        </div>
      </footer>
    </html>
  );
}
