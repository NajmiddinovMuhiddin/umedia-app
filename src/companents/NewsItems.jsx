import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {getNews} from "../Api";

const NewsItems = () => {
    const [newsItems, setNewsItems] = useState([]);

    const fetchNews = async () => {
        const response = await getNews();
        setNewsItems(response.news);
        return response;
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <div className="news__items">
                {newsItems.map((items, index) =>
                    <Link to={"/news-info"} className={`news__item news__item-${index + 1} item-news`}
                          data-aos="fade-up" key={items.id}>
                        <div className="item-news__img ibg">
                            <img src={items.image[0]} alt=""/>
                        </div>
                        <div className="item-news__title">{items.title}</div>
                        <div className="item-news__subtitle">{items.description}</div>
                    </Link>
                )}
            </div>

        </>
    );
};

export default NewsItems;