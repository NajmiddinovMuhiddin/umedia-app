import React from 'react';
import Layout from "../Layout";
import ServicesItems from "../companents/ServicesItems";
import {Link} from "react-router-dom";
import "../scripts-vanilla.js"

const Services = () => {

    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">услуги</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">услуги</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main" id="main">
                <section className="services">
                    <div className="services__container">
                        <div className="services__title title-section"><span>Наши</span>услуги</div>
                        <div className="services__items">
                            <ServicesItems/>
                          {/*  <article className="services__item" data-aos="zoom-in">
                                <Link to={"/service"} className="services__item-title">Lorem ipsum dolor sit
                                    amet.</Link>
                                <div className="services__item-text text">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ipsam, unde?
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="zoom-in">
                                <Link to={"/service"} className="services__item-title">Lorem ipsum dolor sit
                                    amet.</Link>
                                <div className="services__item-text text">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ipsam, unde?
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="zoom-in">
                                <Link to={"/service"} className="services__item-title">Lorem ipsum dolor sit
                                    amet.</Link>
                                <div className="services__item-text text">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ipsam, unde?
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>

                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="zoom-in">
                                <Link to={"/service"} className="services__item-title">Lorem ipsum dolor sit
                                    amet.</Link>
                                <div className="services__item-text text">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Ipsam, unde?
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                        <li className="info-services-item__item text">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dolorum
                                            explicabo recusandae ullam voluptatibus, voluptatum.
                                        </li>
                                    </ul>
                                </div>
                            </article>*/}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Services;