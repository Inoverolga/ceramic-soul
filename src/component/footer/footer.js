import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import JustValidate from "just-validate";
import { useEffect } from "react";
import "./footer.scss";

const Footer = () => {
    useEffect(() => {
        const validator = new JustValidate(".footer_form-wrapper", {
            validateBeforeSubmitting: true,
            errorFieldCssClass: "is-invalid",
            successFieldCssClass: "is-valid",
        });

        validator

            .addField("#email", [
                {
                    rule: "required",
                    errorMessage: "Поле обязательно для заполнения",
                },
                { rule: "email", errorMessage: "Введите корректный email" },
            ])
            .addField("#checkbox", [
                {
                    rule: "required",
                    errorMessage: "Обязательно согласие с условиями",
                    //   errorContainer: ".error-message",
                },
            ]);

        return () => validator.destroy();
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__wrapper-start">
                        <h3 className="footer__title-h3">newsletter</h3>
                        <form className="footer_form-wrapper">
                            <div className="footer__input">
                                <label
                                    className="footer__email-text"
                                    htmlFor="email"
                                >
                                    Keep up to date with news and promotions
                                </label>
                                <input
                                    type="email"
                                    className="footer__input-email"
                                    placeholder="Enter your e-mail"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="footer__checkbox">
                                <label
                                    className="footer__checkbox-text"
                                    htmlFor="checkbox"
                                >
                                    <input
                                        className="footer__checkbox-icon"
                                        type="checkbox"
                                        name="checkbox"
                                        id="checkbox"
                                    />
                                    I agree with the <a href="0">terms</a>
                                </label>
                            </div>
                            <button className="footer__button" type="submit">
                                submit
                            </button>
                        </form>
                    </div>

                    <nav className="footer__wrapper-nav">
                        <div>
                            <ul className="footer__navigation-grid">
                                <a href="/">
                                    <li className="discover">discover</li>
                                </a>
                                <a href="/">
                                    <li className="shopping">shopping</li>
                                </a>
                                <a href="/">
                                    <li className="about-us">About Us</li>
                                </a>
                                <a href="/">
                                    <li className="catalog">Catalog</li>
                                </a>
                                <a href="/">
                                    <li className="blog">Blog</li>
                                </a>
                            </ul>
                        </div>
                        <div>
                            <ul className="footer__navigator-flex">
                                <a href="/">
                                    <li className="information">information</li>
                                </a>
                                <a href="/">
                                    <li className="terms-and-conditions">
                                        Terms and Conditions
                                    </li>
                                </a>
                            </ul>
                        </div>

                        <div className="footer__wrapper-social">
                            <h3 className="footer__title-h3">follow us</h3>
                            <div className="footer__list-social">
                                <a href="/">
                                    <FaFacebook className="footer__list-social-facebook" />
                                </a>
                                <a href="/">
                                    <FaInstagram className="footer__list-social-instagram" />
                                </a>
                                <a href="/">
                                    <ImPinterest2 className="footer__list-social-pinterest" />
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <p className="footer__endtext">
                    © Copyright 2025, Ceramic soul
                </p>
            </div>
        </footer>
    );
};

export default Footer;
