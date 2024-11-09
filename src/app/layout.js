
import Nav from "@/components/Nav";
import "./globals.css";



const RootLayout = ({ children })=> {
  return (
    <html lang="en">
      <body
        
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
