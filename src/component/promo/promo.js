import { Component } from "react";
import { Link } from "react-router-dom";
import "./promo.scss";

class Promo extends Component {
    render() {
        return (
            <section className="promo">
                <div className="container">
                    <img
                        src={require("./img/potter.jpg")}
                        alt="potter"
                        className="promo__potter"
                    />
                    <nav className="header__nav">
                        <ul>
                            <li>
                                <Link to="/catalog" className="header__link">
                                    catalog
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="header__link">
                                    blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="header__link">
                                    about
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="promo__wrapper">
                        <div className="title-h1-italic">
                            Make your dream come true
                            <br /> or decorate your home
                        </div>
                        <div className="promo__cta">
                            <img
                                className="promo__img"
                                src={require("./img/ceramic-vase copy.jpg")}
                                alt="ceramic-vase"
                            />
                            <button className="butten__defoult promo__btn">
                                shop now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Promo;

//на нативном JS...
// const Promo = () => {
//     const onClickBurger = () => {
//         const menu = document.querySelector(".header__menu");
//         menu.classList.add("header__menu_active");
//         document.body.style.overflow = "hidden";
//     };

//     const onClickClose = () => {
//         const menu = document.querySelector(".header__menu");
//         menu.classList.remove("header__menu_active");
//         document.body.style.overflow = "";
//     };

//     return (
//         <section className="promo">
//             <img
//                 src={require("./img/potter.jpg")}
//                 alt="potter"
//                 className="promo__potter"
//             />
//             <div className="container">
//                 <div className="header">
//                     <div className="header__menu">
//                         <div
//                             className="header__menu-close"
//                             onClick={onClickClose}
//                         >
//                             <span></span>
//                             <span></span>
//                         </div>
//                         <nav className="header__menu-nav">
//                             <ul>
//                                 <li>
//                                     <a href="/" className="header__menu-link">
//                                         catalog
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/" className="header__menu-link">
//                                         blog
//                                     </a>
//                                 </li>
//                                 <il>
//                                     <a href="/" className="header__menu-link">
//                                         about
//                                     </a>
//                                 </il>
//                             </ul>
//                         </nav>
//                     </div>
//                     <div className="header__top">
//                         <div className="burger" onClick={onClickBurger}>
//                             <span></span>
//                             <span></span>
//                             <span></span>
//                         </div>
//                         <a href="0" className="header__logo">
//                             <img
//                                 src={require("../../logo/logo.png")}
//                                 alt="logo"
//                             />
//                         </a>
//                         <div className="header__icons">
//                             <a href="0">
//                                 <span>
//                                     <CiSearch />
//                                 </span>
//                             </a>
//                             <a href="0">
//                                 <span>
//                                     <HiOutlineShoppingBag />
//                                 </span>
//                             </a>
//                         </div>
//                     </div>
//                     <nav className="header__nav">
//                         <ul>
//                             <li>
//                                 <a href="0" className="header__link">
//                                     catalog
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="0" className="header__link">
//                                     blog
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="0" className="header__link">
//                                     about
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className="promo__wrapper">
//                     <div className="title-h1-italic">
//                         Make your dream come true
//                         <br /> or decorate your home
//                     </div>
//                     <div className="promo__cta">
//                         <img
//                             className="promo__img"
//                             src={require("./img/ceramic-vase copy.jpg")}
//                             alt="ceramic-vase"
//                         />
//                         <button className="butten__defoult promo__btn">
//                             shop now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Promo;
