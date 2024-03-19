import First from "../First/First";
import Contacts from "../Contacts/Contacts";
import Problems from "../Problems/Problems";
import Skolkovo from "../Skolkovo/Skolkovo";
import Believe from "../Believe/Believe";
import Companies from "../Companies/Companies";

function ServicePage() {
    const problemsList = [
        {title: "Не включается"},
        {title: "Показывает полосы"},
        {title: "Мигает или рябит"},
        {title: "Не воспроизводит изображение"},
        {title: "перезагружается"},
        {title: "Искажает изображение"},
        {title: "Тормозит изображение"},
        {title: "Показывает тускло"},
        {title: "Зависает"},
    ];
    return (
        <div className="ServicePage">

                  <First
                      backgroundImageClass={'backgroundImage2'}
                      title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}
                      subtitle1={'Бесплатный выезд мастера/курьер'}
                      subtitle2={'Железная гарантия на все услуги'}
                  />
            <Problems list={problemsList} backgroundImageClass={'problems-background1'}/>
<Skolkovo/>
            <Believe/>
<Companies/>

                      <Contacts/>

        </div>
    );
}

export default ServicePage;
