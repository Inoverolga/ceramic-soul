import "./activities.scss";

const Activities = () => {
    return (
        <section className="activities">
            <div className="container">
                <div className="activities__content-wrapper">
                    <h2 className="title-h2">create or buy</h2>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-xl-2-5 activities__col">
                            <h3 className="title-h3 h3-1">our store</h3>
                            <img
                                src={require("./img/store.png")}
                                alt="store"
                                className="activities__img"
                            />
                            <p className="activities__text">
                                Welcome to <span>Ceramic Soul</span>, where each
                                piece tells a story of craftsmanship and
                                creativity. Our handmade ceramics are
                                thoughtfully designed and carefully crafted,
                                blending traditional techniques with modern
                                aesthetics. Whether you're looking for a unique
                                gift or a special addition to your home, our
                                collection offers timeless pieces that bring
                                warmth and authenticity to any space.
                            </p>
                        </div>
                        <div className="pure-u-1 pure-u-xl-3-5 activities__col">
                            <h3 className="title-h3 h3-2">our workshop</h3>
                            <img
                                src={require("./img/ceramic-4510917_1280 1.png")}
                                alt="ceramic"
                                className="activities__img"
                            />
                            <p className="activities__text activities__text_fixed">
                                At <span>Ceramic Soul</span>workshop, we don’t
                                just craft ceramics—we invite you to get
                                hands-on and create your own unique pieces.
                                Through our engaging masterclasses, you’ll learn
                                traditional techniques, work with natural
                                materials, and experience the joy of shaping
                                clay into something truly personal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
