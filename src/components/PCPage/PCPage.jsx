import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function PCPage() {
    const problemsList = [
        {title: "Не включается"},
        {title: "Перезагружается"},
        {title: "Не реагирует на действия"},
        {title: "Зависает"},
        {title: "Сильно греется"},
        {title: "Не заряжается"},
        {title: "Не показывает изображение экрана"},
        {title: "Выключается"},
        {title: "Искажает изображение"},
    ];
    return (
        <div className="pcPage">

                  <First
                      backgroundImageClass={'backgroundImage7'}
                      title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                  />
            <Problems list={problemsList} backgroundImageClass={'problems-background5'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts/>

        </div>
    );
}

export default PCPage;
