import Footer from "./Footer";
import Header from "./Header";

// Layout.jsx
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer className="min-h-300px md:px-8">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
