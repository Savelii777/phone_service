import './Believe.css';
import SimpleImageSlider from "react-simple-image-slider";
import React from "react";


function Believe() {
    const images = [
        { url: "https://doghusky.ru/wp-content/uploads/2022/01/sa-11.jpg" },
        { url: "https://remkaz.ru/wp-content/uploads/2019/12/slide-1-2-freshblue.jpg" },
        { url: "https://www.grandactive.ru/UploadedFiles/2020/2020-10/621989c6-2d35-46c6-a933-386b7f28c2b2.jpg" },
    ];
    return (
        <div className="megacontent">
            <div className="warranty">
                <h2 className="warranty__title">
                    Техника заработает, как новая - даем <span className="warranty__span">гарантию до 12 месяцев</span>
                </h2>
                <div className="warranty__warranty">
                    <div className="warranty__warranty-item">
                        <div className="warranty__img1">

                        </div>
                        <p className="warranty__text">
                            С 2016 года мы запаяли более 15 миллионов компонентов приборов и произвели более 2 000 изделий (собственные разработки)
                        </p>
                    </div>
                    <div className="warranty__warranty-item">
                        <div className="warranty__img2">

                        </div>
                        <p className="warranty__text">
                            Этот опыт позволяет нам ремонтировать даже сложные неисправности приборов
                        </p>
                    </div>
                    <div className="warranty__warranty-item">
                        <div className="warranty__img3">

                        </div>
                        <p className="warranty__text">
                            Даем гарантию на работы до 12 месяцев
                        </p>
                    </div>

                </div>
            </div>
            <div className="believe">
                <div className="believe__container">
                    <h2 className="believe__title">
                        Не накручиваем стоимость и не <br/>
                        лечим несуществующих «болячек»
                    </h2>
                    <div className="believe__list">
                        <div className="believe__container-image">

                        </div>
                        <p className="believe__container-text">
                            По нашему регламенту диагностику проводят минимум 2 мастера-инженера и выбирают наиболее
                            выгодный и качественный способ решения неисправности
                        </p>
                    </div>
                    <div className="believe__container-description">
                        Мы дорожим доверием наших клиентов
                        и собственной репутацией
                    </div>
                </div>
                <div className="believe__image">

                </div>

            </div>
            <div className="price">

                <div className="price__container">
                    <h2 className="price__title">
                        Стоимость не изменится <br/>
                        в процессе ремонта
                    </h2>
                    <div className="price__subcontainer">
                        <div className="price__slider">

                        </div>

                        <div className="price__textcontainer">

                            <ul className="price__list">
                                <li className="price__list-item">
                                    <div className="price__list-image">

                                    </div>
                                    <p className="price__list-text">
                                        Мы самостоятельно связываемся с Вами и утверждаем ключевые моменты: стоимость и сроки решения неисправности
                                    </p>
                                </li>
                                <li className="price__list-item">
                                    <div className="price__list-image">

                                    </div>
                                    <p className="price__list-text">
                                        Приступаем к ремонту только после утверждения его стоимости и сроков
                                    </p>
                                </li>
                            </ul>
                            <button className="price__button">
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Believe;
