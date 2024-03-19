import './Problems.css';
import React from "react";



function Problems({list, backgroundImageClass}) {

    return (
        <div className="problems">
            <h2 className="problems__title">
                Ремонтируем
                оригинальными комплектующими
                из Европы, США, Китая
            </h2>
            <div className="problems__description">
                <p className="problems__description-title">
                    Работаем со всеми известными марками. <br/>
                    Часть неисправностей реанимируем удаленно!
                </p>
                <p className="problems__description-subtitle">
                    Минимальная стоимость ремонта - 1500₽
                </p>
            </div>
            <div className="problems__container">
                <div className="problems__container-left">
                    <p className="problems__container-text">
                        Устраняем практически все виды неисправностей <br/>
                        и поможем, если ваш монитор:
                    </p>

                    <ul className="problems__list">
                        {list.map((problem) => (
                            <li className="problems__list-item">
                                <div className="problems__list-image">

                                </div>
                                {problem.title}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="problems__container-right">
                    <div className={`problems__container-image ${backgroundImageClass}` }>

                    </div>
                </div>

            </div>
            <form className="problems__form" action="">
                <p className="problems__form-text">Оставьте заявку и получите бесплатную диагностику прибора</p>
                <div className="problems__form-container">
                    <input className="problems__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                    <button className="problems__form-button">
                        оставить заявку
                    </button>
                </div>
                <p className="problems__form-subtext">
                    Диагностика без последующего ремонта - 500₽
                </p>

            </form>
        </div>
    );
}

export default Problems;
