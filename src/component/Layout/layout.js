import Header from "../header/header";
import Footer from "../footer/footer";
import "./layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
