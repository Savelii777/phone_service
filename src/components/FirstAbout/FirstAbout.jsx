import React from 'react';
import './FirstAbout.css';

function FirstAbout({ backgroundImageClass, title, subtitle1, subtitle2 }) {
    return (
        <div className={`firstAbout ${backgroundImageClass}`}>
            <div className="firstAbout__container">
                <div className="firstAbout__title-container">
                    <h1 className="firstAbout__title">О компании</h1>
                </div>
                <p  className="firstAbout__text">
                    Компания «Починим все» вот уже более 7 лет оказывает услуги по ремонту электроники. В нашей команде работают только специалисты с многолетним опытом, благодаря которым мы определяем проблему и решаем ее за короткий срок .                </p>
                <div className="firstAbout__list">

                </div>

                <div className="firstAbout__points">
                    <div className="firstAbout__points-item">
                        <div className="points__img1">

                        </div>
                        <p className="points__text">
                            Используем комплектующие
                            из Европы, Китая, США
                        </p>
                    </div>
                    <div className="firstAbout__points-item">
                        <div className="points__img2">

                        </div>
                        <p className="points__text">
                            Не накручиваем стоимость за выдуманные «болячки»
                        </p>
                    </div>
                    <div className="firstAbout__points-item">
                        <div className="points__img3">

                        </div>
                        <p className="points__text">
                            Работаем даже
                            с безнадежными случаями
                        </p>
                    </div>
                    <div className="firstAbout__points-item">
                        <div className="points__img4">

                        </div>
                        <p className="points__text">
                            Даем гарантию
                            на работы
                            до 12 месяцев
                        </p>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default FirstAbout;