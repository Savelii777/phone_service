import React, { useContext } from 'react';
import './Achievements.css';
import {PageContext}from '../../contexts/PageContext';
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/constants";


function Achievements() {
    const {activeItem, setActiveItem } = useContext(PageContext);

    const handleClick = (index) => {
        console.log('setActiveItem:', setActiveItem);
        setActiveItem(index);
    };

    return (
        <div className="achievements">
            <h2 className="achievements__title">
                Мы запаяли более 15 000 000 компонентов приборов
            </h2>
            <p className="achievements__subtitle">
                Выберете, что нужно отремонтировать:
            </p>
            <ul className="achievements__list">
                <Link to={AppRoute.TV}>
                    <li className="achievements__list-item1">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 0 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(0)}
                        >
                            <p className="achievements__list-text">телевизор</p>
                        </div>
                    </li>
                </Link>
                <Link to={AppRoute.Laptop}>
                    <li className="achievements__list-item3">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 1 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(1)}
                        >
                            <p className="achievements__list-text">ноутбук</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Smartphone}>
                    <li className="achievements__list-item4">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 2 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(2)}
                        >
                            <p className="achievements__list-text">Телефон</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Taplet}>
                    <li className="achievements__list-item5">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 3 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(3)}
                        >
                            <p className="achievements__list-text">Планшет</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.PC}>
                    <li className="achievements__list-item6">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 4 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(4)}
                        >
                            <p className="achievements__list-text">ПК</p>
                        </div>
                    </li>
                </Link>

                <Link to={AppRoute.Other}>
                    <li className="achievements__list-item7">
                        <div
                            className={`achievements__list-shadow ${
                                activeItem === 5 ? 'active' : ''
                            }`}
                            onClick={() => handleClick(5)}
                        >
                            <p className="achievements__list-text">Другое</p>
                        </div>
                    </li>
                </Link>

                {/*<Link to={AppRoute.Dishwasher}>*/}
                {/*    <li className="achievements__list-item8">*/}
                {/*        <div*/}
                {/*            className={`achievements__list-shadow ${*/}
                {/*                activeItem === 6 ? 'active' : ''*/}
                {/*            }`}*/}
                {/*            onClick={() => handleClick(6)}*/}
                {/*        >*/}
                {/*            <p className="achievements__list-text">посудомоечная машина</p>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</Link>*/}

                {/*<Link to={AppRoute.PC}>*/}
                {/*    <li className="achievements__list-item2">*/}
                {/*        <div*/}
                {/*            className={`achievements__list-shadow ${*/}
                {/*                activeItem === 7 ? 'active' : ''*/}
                {/*            }`}*/}
                {/*            onClick={() => handleClick(7)}*/}
                {/*        >*/}
                {/*            <p className="achievements__list-text">монитор</p>*/}
                {/*        </div>*/}
                {/*    </li>*/}
                {/*</Link>*/}

            </ul>
            <form className="achievements__form" action="">
                <p className="achievements__form-text">Оставьте заявку и получите первичную консультацию и диагностику</p>
                <div className="achievements__form-container">
                    <input className="achievements__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                    <button className="achievements__form-button">
                        оставить заявку
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Achievements;
