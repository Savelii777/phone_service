import React from 'react';
import './First.css';

function First({ backgroundImageClass, title, subtitle1, subtitle2 }) {
    return (
        <div className={`first ${backgroundImageClass}`}>
            <div className="first__container">
            <h1 className="first__title">{title}</h1>
                <div className="first__list">
                    <div className="first__subtitle">
                        <div className="first__subtitle-img">

                        </div>
                        <p className="first__subtitle-text">
                            {subtitle1}
                        </p>
                    </div>
                    <div className="first__subtitle">
                        <div className="first__subtitle-img">

                        </div>
                        <p className="first__subtitle-text">
                            {subtitle2}
                        </p>
                    </div>
                </div>
                <form className="first__form" action="">
                    <p className="first__form-text">Реанимируем технику даже удаленно!</p>
                    <div className="first__form-container">
                        <input className="first__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                        <button className="first__form-button">
                            записаться на
                            <span className="first__form-span">
                            бесплатную диагностику
                        </span>
                        </button>
                    </div>

                </form>
                <div className="first__points">
                    <div className="first__points-item">
                        <div className="points__img1">

                        </div>
                        <p className="points__text">
                            Используем комплектующие
                            из Европы, Китая, США
                        </p>
                    </div>
                    <div className="first__points-item">
                        <div className="points__img2">

                        </div>
                        <p className="points__text">
                            Не накручиваем стоимость за выдуманные «болячки»
                        </p>
                    </div>
                    <div className="first__points-item">
                        <div className="points__img3">

                        </div>
                        <p className="points__text">
                            Работаем даже
                            с безнадежными случаями
                        </p>
                    </div>
                    <div className="first__points-item">
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

export default First;