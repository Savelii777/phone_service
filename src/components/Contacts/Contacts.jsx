import './Contacts.css';
import React from "react";

function Contacts() {

    return (
        <div className="contacts">
            <div className="contacts__container">
                <iframe
                    className="contacts__map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa098bc3d5469334310532542774528a76509b8f16ec59589cb2dd449b5fcc54c&amp;source=constructor"
                    width="479" height="260" frameBorder="0"></iframe>
                <form className="contacts__form" action="">
                    <p className="contacts__form-text">Оставьте свой номер и получите консультацию мастера:</p>
                    <div className="contacts__form-container">
                        <input className="contacts__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                        <button className="contacts__form-button">
                            Оставить заявку
                        </button>
                    </div>
                </form>
                <h2 className="contacts__title">
                    Наши контакты:
                </h2>
                <div className="contacts__text">
                    <p>Будем рады видеть Вас в нашем офисе:</p>
                    <p>
                        Графская д.11 <br/>
                        Петровский б-р д.3 к.1 <br/>
                        Пн-Вс с 10:00 до 21:00
                    </p>
                    <p>
                        +7 (901) 132-08-75
                    </p>
                </div>
                <ul className="contacts__list-bottom">
                    <li className="contacts__list_telegram">
                    </li>
                    <li className="contacts__list_whatsapp">

                    </li>
                    <li className="contacts__list_vk">

                    </li>
                    <li className="contacts__list_youtube">

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;
