import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 reggae:bg-emerald-600 dark:text-gray-100 min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">{children}</main>
      <Footer />
    </div>
  );
};
