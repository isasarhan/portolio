import 'bootstrap/dist/css/bootstrap.min.css'
import "./globals.css";
import Navbar from "../components/nav/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar />
      <body>
        {children}</body>
    </html>
  );
}
