import "../blog/blog.scss";

const Blog = () => {
    return (
        <section className="blog">
            <div className="container">
                <h1 className="blog__title-h1">our digital notes</h1>
                <div className="blog__wrapper">
                    <div className="blog__card">
                        <div className="blog__data pure-g">
                            <div className="pure-u-1 pure-u-md-1-2">
                                <img
                                    className="blog__img"
                                    src={require("./img/tea-3057645_1280 1 (1).png")}
                                    alt="tea1"
                                />
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2 blog__data-column">
                                <h3 className="blog__title-h3">
                                    pottery secrets
                                </h3>
                                <button className="btn-read">read</button>
                            </div>
                        </div>
                        <div className="blog__text">
                            Discover the timeless art of pottery and unlock the
                            secrets hidden in every curve and glaze. From
                            mastering the perfect wheel technique to
                            understanding how clay transforms in the kiln, each
                            step reveals a blend of tradition and creativity.
                            The true magic lies in the details—subtle textures,
                            natural imperfections, and the unique touch of the
                            artisan’s hand, turning simple earth into lasting
                            beauty.
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className="blog__data pure-g">
                            <div className="pure-u-1 pure-u-md-1-2">
                                <img
                                    className="blog__img"
                                    src={require("./img/tea-7968441_1280 2.png")}
                                    alt="tea2"
                                />
                            </div>
                            <div className="pure-u-1 pure-u-md-1-2 blog__data-column">
                                <h3 className="blog__title-h3">
                                    the best materials for pottery
                                </h3>
                                <button className="btn-read">read</button>
                            </div>
                        </div>
                        <div className="blog__text">
                            The best material for pottery often depends on the
                            desired look and function, but stoneware is a
                            favorite for its durability and versatility. It’s
                            strong, resistant to chipping, and perfect for both
                            functional pieces like mugs and plates, as well as
                            decorative art. Porcelain offers a delicate, refined
                            finish, ideal for intricate designs
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
