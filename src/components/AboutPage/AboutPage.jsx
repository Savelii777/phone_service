import FirstAbout from "../FirstAbout/FirstAbout";
import Achievements from "../Achievements/Achievements";
import Contacts from "../Contacts/Contacts";
import Believe from "../Believe/Believe";

function AboutPage() {

    return (
        <div className="aboutPage">

            <FirstAbout
                backgroundImageClass={'backgroundImage6'}
                title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}
                subtitle1={'Бесплатный выезд мастера/курьер'}
                subtitle2={'Железная гарантия на все услуги'}
            />

            <Achievements/>
            <Contacts/>

        </div>
    );
}

export default AboutPage;
