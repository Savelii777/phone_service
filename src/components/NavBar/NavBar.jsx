import './NavBar.css';
import {Link} from "react-router-dom";
import {AppRoute} from "../../utils/constants";
import {useState, useContext} from "react";
import { PageContext } from '../../contexts/PageContext';

function NavBar() {
    const {activeItem, setActiveItem} = useContext(PageContext);

    const handleClick = (index) => {
        console.log('setActiveItem:', setActiveItem);
        setActiveItem(index);
    };

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__list-item">
                    <Link to={AppRoute.TV}
                          className={`navbar__list-text ${activeItem === 0 ? 'active' : ''}`}
                          onClick={() => handleClick(0)}>Телевизоры</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to={AppRoute.Laptop}
                          className={`navbar__list-text ${activeItem === 1 ? 'active' : ''}`}
                          onClick={() => handleClick(1)}>Ноутбуки</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to={AppRoute.Smartphone}
                          className={`navbar__list-text ${activeItem === 2 ? 'active' : ''}`}
                          onClick={() => handleClick(2)}>Телефоны</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to={AppRoute.Taplet}
                          className={`navbar__list-text ${activeItem === 3 ? 'active' : ''}`}
                          onClick={() => handleClick(3)}>Планшеты</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to={AppRoute.PC}
                          className={`navbar__list-text ${activeItem === 4 ? 'active' : ''}`}
                          onClick={() => handleClick(4)}>Компьютеры</Link>
                </li>
                <li className="navbar__list-item">
                    <Link to={AppRoute.Other}
                          className={`navbar__list-text ${activeItem === 5 ? 'active' : ''}`}
                          onClick={() => handleClick(5)}>Другое</Link>
                </li>

                {/*<li className="navbar__list-item">*/}
                {/*    <Link to={AppRoute.Motherboard}*/}
                {/*          className={`navbar__list-text ${activeItem === 3 ? 'active' : ''}`}*/}
                {/*          onClick={() => handleClick(3)}>Материнские платы</Link>*/}
                {/*</li>*/}
                {/*<li className="navbar__list-item">*/}
                {/*    <Link to={AppRoute.Conditioner}*/}
                {/*          className={`navbar__list-text ${activeItem === 4 ? 'active' : ''}`}*/}
                {/*          onClick={() => handleClick(4)}>Кондиционеры</Link>*/}
                {/*</li>*/}
                {/*<li className="navbar__list-item">*/}
                {/*    <Link to={AppRoute.WashingMachine}*/}
                {/*          className={`navbar__list-text ${activeItem === 5 ? 'active' : ''}`}*/}
                {/*          onClick={() => handleClick(5)}>Стиральные машины</Link>*/}
                {/*</li>*/}
                {/*<li className="navbar__list-item">*/}
                {/*    <Link to={AppRoute.Dishwasher}*/}
                {/*          className={`navbar__list-text ${activeItem === 6 ? 'active' : ''}`}*/}
                {/*          onClick={() => handleClick(6)}>Посудомоечные машины</Link>*/}
                {/*</li>*/}
            </ul>
        </nav>

    );
}

export default NavBar;
