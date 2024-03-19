import First from "../First/First";
import Achievements from "../Achievements/Achievements";
import Working from "../Working/Working";
import Believe from "../Believe/Believe";
import Contacts from "../Contacts/Contacts";
import Companies from "../Companies/Companies";


function MainPage() {

    return (
        <div className="MainPage">

            <First
                backgroundImageClass={'backgroundImage4'}
                title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}
                subtitle1={'Бесплатный выезд мастера/курьер'}
                subtitle2={'Железная гарантия на все услуги'}
            />

            <Achievements/>
            <Working/>
            <Companies/>
            <Contacts/>

        </div>
    );
}

export default MainPage;
