import { Component } from "react";
import { Link } from "react-router-dom";
import "../promo/promo.scss";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newClass: "header__menu",
        };
    }
    onClickBurger = () => {
        this.setState(({ newClass }) => ({
            newClass: "header__menu header__menu_active",
        }));
    };

    onClickClose = () => {
        this.setState(({ newClass }) => ({
            newClass: "header__menu",
        }));
    };

    render() {
        const { newClass } = this.state;

        return (
            <div className="container">
                <div className="header">
                    <div className={newClass}>
                        <div
                            className="header__menu-close"
                            onClick={this.onClickClose}
                        >
                            <span></span>
                            <span></span>
                        </div>
                        <nav className="header__menu-nav">
                            <ul>
                                <li>
                                    <Link
                                        to="/catalog"
                                        className="header__menu-link"
                                    >
                                        catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/blog"
                                        className="header__menu-link"
                                    >
                                        blog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className="header__menu-link"
                                    >
                                        about
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__top">
                        <div className="burger" onClick={this.onClickBurger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <Link to="/" className="header__logo">
                            <img
                                src={require("../../logo/logo.png")}
                                alt="logo"
                            />
                        </Link>
                        <div className="header__icons">
                            <Link to="/" href="0">
                                <span>
                                    <CiSearch />
                                </span>
                            </Link>
                            <Link to="/" href="0">
                                <span>
                                    <HiOutlineShoppingBag />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
