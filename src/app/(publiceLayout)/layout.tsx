import Footer from "@/components/ui/publice/Footer";
import Navbar from "@/components/ui/publice/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
