
import Nav from "@/components/Nav";
import "./globals.css";
import Footer from "@/components/Footer";



const RootLayout = ({ children })=> {
  return (
    <html lang="en">
      <body
        
      >
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
