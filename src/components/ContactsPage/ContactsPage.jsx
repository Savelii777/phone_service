import "./ContactsPage.css"
import React from "react";

function ContactsPage() {

    return (
        <div className="contactsPage">

            <h2 className="contactsPage__title">
                Наши контакты:
            </h2>
            <iframe
                className="contactsPage__map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa098bc3d5469334310532542774528a76509b8f16ec59589cb2dd449b5fcc54c&amp;source=constructor"
                width="1000" height="540" frameBorder="0"></iframe>
            <div className="contactsPage__text">
                <p><span>Будем рады видеть Вас в нашем офисе: </span></p>
                <p>
                    Графская д.11 <br/>
                    Петровский б-р д.3 к.1 <br/>
                    Пн-Вс с 10:00 до 21:00
                </p>
                <p>
                    +7 (901) 132-08-75
                </p>
                <p>
                    ИНН - 780112887422 <br/>
                    Вересов Вадим Валерьевич
                </p>
            </div>
            <ul className="contactsPage__list-bottom">
                <li className="contactsPage__list_telegram">
                </li>
                <li className="contactsPage__list_whatsapp">

                </li>
                <li className="contactsPage__list_vk">

                </li>
                <li className="contactsPage__list_youtube">

                </li>
            </ul>
            <form className="contactsPage__form" action="">
                <p className="contactsPage__form-text">Оставьте свой номер и получите консультацию мастера:</p>
                <div className="contactsPage__form-container">
                    <input className="contactsPage__form-input" type="text" placeholder='+7 (___) ___-__-__'/>
                    <button className="contactsPage__form-button">
                        Оставить заявку
                    </button>
                </div>
            </form>

        </div>

    );
}

export default ContactsPage;
