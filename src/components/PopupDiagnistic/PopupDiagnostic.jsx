import './PopupDiagnostic.css';
import {useState} from "react";
import axios from "axios";

function PopupDiagnostic() {
    const TelegramBotToken = '6586146588:AAF4grYh7_ePIL1baFb6tz0zBJ8gfjzTyvU';
    const TelegramChatId = '4078984131';
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = `Name: ${name}\nPhone: ${phone}`;

        try {
            await axios.post(`https://api.telegram.org/bot${TelegramBotToken}/sendMessage`, {
                chat_id: TelegramChatId,
                text: data,
            });

            // Очистите форму после успешной отправки
            setName('');
            setPhone('');

        } catch (error) {
            console.error('Error sending data to Telegram:', error);
        }
    };
    return (
        <div className="popupDiagnostic">
            <div className="popupDiagnostic__back">

            </div>
            <div className="popupDiagnostic__container">
                <div className="popupDiagnostic__close">

                </div>
                <p className="popupDiagnostic__text">
                    Получите инструкции, как реанимировать Ваш прибор самостоятельно:
                </p>
                <div className="popupDiagnostic__button">
                    <div className="popupDiagnostic__image"></div>
                    +7 (901) 132-08-75
                </div>
                <p className="popupDiagnostic__title">
                    Или оставьте Ваши контакты  и  мы перезвоним в течение 10 минут
                </p>
                <form onSubmit={handleSubmit} className="popupDiagnostic__form">
                    <input className="popupDiagnostic__form-input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+7 (___) ___-__-__' type="text"/>
                    <input className="popupDiagnostic__form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder='ИМЯ' type="text"/>
                    <button type="submit" className="popupDiagnostic__form-button">
                        получить консультацию
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupDiagnostic;
