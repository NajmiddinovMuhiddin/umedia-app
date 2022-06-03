import React from 'react';
import Layout from "../Layout";
import {Link} from "react-router-dom";


const News = () => {


    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main">
                <section className="news background">
                    <div className="news__container">

                        <div className="news__items">
                                <Link to={"/news-info"} className="news__item news__item-1 item-news"
                                      data-aos="fade-up">
                                    <div className="item-news__img ibg">
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/01.webp"} alt=""/>
                                    </div>
                                    <div className="item-news__title">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>
                                    <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium expedita libero reiciendis totam ullam veniam.</div>
                                </Link>
                        </div>

                    </div>
                    <div className="news__anim-items">
                        <div className="news__anim-circle news__anim-circle-1"/>
                        <div className="news__anim-circle news__anim-circle-2"/>
                    </div>
                </section>
            </main>
           {/* <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>*/}
            <main className="main">
                <section className="news background">
                    <div className="news__container">
                        <div className="news__items">
                            <Link to={"/news-info"} className="news__item news__item-1 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/01.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-2 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/02.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-3 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/03.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-4 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/04.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/04.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-5 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/05.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/05.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-6 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/06.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/06.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                        </div>
                        <div className="news__items">
                            <Link to={"/news-info"} className="news__item news__item-1 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/01.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-2 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/02.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-3 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/03.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-4 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/04.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/04.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-5 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/05.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/05.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                            <Link to={"/news-info"} className="news__item news__item-6 item-news" data-aos="fade-up">
                                <div className="item-news__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/06.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/06.png"} alt=""/></picture>
                                </div>
                                <div className="item-news__title">Lorem novast</div>
                                <div className="item-news__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="news__anim-items">
                        <div className="news__anim-circle news__anim-circle-1"/>
                        <div className="news__anim-circle news__anim-circle-2"/>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default News;