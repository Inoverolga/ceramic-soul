import "../about/about.scss";
import Git from "../../component/git/git";
import Map from "../../component/about-map/map";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h1 className="about__title-h1">where it all began</h1>
                <div className="about__content">
                    <img
                        src={require("./img/crafts-5276736_1280 1.png")}
                        alt="crafts"
                        className="about__content-img"
                    />
                    <div className="about__content-wrapper-text">
                        <p className="about__content-text">
                            Our small pottery workshop began as a simple passion
                            project, rooted in a love for handmade artistry and
                            traditional craftsmanship. What started with a
                            single wheel and a few lumps of clay has grown into
                            a cozy creative space where ideas take shape and
                            stories are told through every piece. Inspired by
                            timeless techniques and the beauty of natural
                            materials, we’ve built a place where both beginners
                            and experienced artists can come together, share
                            their skills, and celebrate the art of pottery. Each
                            creation reflects our journey—shaped by hand, fired
                            with care, and made to be cherished.
                        </p>
                        <p className="about__content-text">
                            Over the years, our workshop has become more than
                            just a place to create—it’s a community. Friends,
                            families, and curious visitors gather here to learn,
                            connect, and experience the joy of working with
                            clay. From intimate masterclasses to collaborative
                            projects, we believe in the power of handmade art to
                            bring people together and spark creativity in
                            unexpected ways.
                        </p>
                        <p className="about__content-text">
                            Every piece that leaves our studio carries a bit of
                            our story, blending tradition with personal
                            expression. Whether it’s a simple cup or an
                            intricate vase, our ceramics are crafted to be both
                            beautiful and functional, adding warmth and
                            authenticity to any space.
                        </p>
                    </div>
                </div>
                <Git />
                <h2 className="about__title-h1">find us</h2>
                <div className="about__map-wrapper">
                    <Map />
                </div>
            </div>
        </section>
    );
};

export default About;
