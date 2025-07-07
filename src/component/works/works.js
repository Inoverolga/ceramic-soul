import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./works.scss";

const Works = () => {
    return (
        <section className="works">
            <div className="container">
                <h2 className="title-h2">check out our works</h2>
                <div className="swiper-container">
                    <Swiper
                        className="mySwiper works__slider"
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        breakpoints={{
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            1920: {
                                slidesPerView: 3,
                                spaceBetween: 35,
                            },
                        }}
                        modules={[Navigation, Pagination]}
                    >
                        <SwiperSlide>
                            <img
                                className="swiper-slide"
                                src={require("./img/tea-ceremony-7807230_1280 1 (1).png")}
                                alt="tea1"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="swiper-slide"
                                src={require("./img/tea-7968441_1280 1 (1).png")}
                                alt="tea2"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="swiper-slide"
                                src={require("./img/tea-6675004_1280 1 (1).png")}
                                alt="tea3"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                className="swiper-slide"
                                src={require("./img/tea-ceremony-7807230_1280 1 (1).png")}
                                alt="tea4"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper__button-wrraper">
                        <FaChevronLeft className="swiper-button-prev " />
                        <FaChevronRight className="swiper-button-next " />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
