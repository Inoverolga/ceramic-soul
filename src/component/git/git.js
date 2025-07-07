import { useEffect } from "react";
import JustValidate from "just-validate";
import "./git.scss";

const Git = () => {
    useEffect(() => {
        const validator = new JustValidate(".git__form-wrapper", {
            validateBeforeSubmitting: true,
        });

        validator
            .addField("#name", [
                {
                    rule: "required",
                    errorMessage: "Поле обязательно для заполнения",
                },
                {
                    rule: "minLength",
                    value: 2,
                    errorMessage: "Минимум 2 символа",
                },
                {
                    rule: "customRegexp",
                    value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                    errorMessage: "Только буквы",
                },
            ])
            .addField("#email", [
                {
                    rule: "required",
                    errorMessage: "Поле обязательно для заполнения",
                },
                { rule: "email", errorMessage: "Введите корректный email" },
            ])
            .addField("#question", [
                {
                    rule: "required",
                    errorMessage: "Поле обязательно для заполнения",
                },
                {
                    rule: "minLength",
                    value: 5,
                    errorMessage: "Минимум 5 символов",
                },
            ])
            .addField("#checkbox", [
                {
                    rule: "required",
                    errorMessage: "Обязательно согласие с условиями",
                    //   errorContainer: ".error-message",
                },
            ])
            .onSuccess((event) => {
                const form = event.currentTarget;
                const formData = new FormData(form);
                fetch("https://httpbin.org/post", {
                    method: "POST",
                    body: formData,
                })
                    .then((res) => res.json())
                    .then((data) => console.log("Super!", data));
            });

        return () => validator.destroy();
    }, []);

    return (
        <section className="git">
            <div className="container">
                <h2 className="title-h2">get in touch</h2>
                <div className="git__wrapper">
                    <div className="git__wrapper_form-vase">
                        <div className="git__form">
                            <form
                                className="git__form-wrapper"
                                action="0"
                                method="get"
                            >
                                <fieldset>
                                    <div className="git__input-block">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            className="git__input"
                                            placeholder="Name"
                                            type="text"
                                            name="name"
                                            id="name"
                                        />
                                    </div>
                                    <div className="git__input-block">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="git__input"
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                    </div>
                                </fieldset>

                                <div className="git__input-text">
                                    <label htmlFor="question">
                                        Your question
                                    </label>
                                    <textarea
                                        className="git__textarea"
                                        placeholder="Question"
                                        type="text"
                                        name="question"
                                        id="question"
                                    />
                                </div>
                                <div className="git__checkbox">
                                    <label htmlFor="checkbox">
                                        <input
                                            className="git__checkbox-icon"
                                            type="checkbox"
                                            id="checkbox"
                                            value="agree"
                                        />
                                        I agree with the <a href="0">terms</a>
                                    </label>
                                </div>
                                <button className="git__button" type="submit">
                                    send request
                                </button>

                                <div className="git__vase animate__animated animate__bounce ">
                                    <img
                                        src={require("./img/vase.png")}
                                        alt="vase"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="git__img">
                        <img src={require("./img/tea (1).png")} alt="tea" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Git;
