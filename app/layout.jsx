import "@/assets/styles/globals.css";
import AuthProivder from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, find rentalsl, find properties",
};
const MainLayout = ({ children }) => {
  return (
    <AuthProivder>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProivder>
  );
};

export default MainLayout;
