import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Promo from "../promo/promo";
// import Activities from "../activities/activities";
// import Git from "../git/git";
// import Works from "../works/works";
// import Footer from "../footer/footer";
import HomePage from "../../pages/home-page/home-page";
import Layout from "../Layout/layout";
import Catalog from "../../pages/catalog/catalog";
import Blog from "../../pages/blog/blog";
import About from "../../pages/about/about";

function App() {
    return (
        <Router>
            <main className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <HomePage />
                            </Layout>
                        }
                    />
                    <Route
                        path="/catalog"
                        element={
                            <Layout>
                                <Catalog />
                            </Layout>
                        }
                    />
                    <Route
                        path="/blog"
                        element={
                            <Layout>
                                <Blog />
                            </Layout>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <Layout>
                                <About />
                            </Layout>
                        }
                    />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
