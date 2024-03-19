import './Working.css';
import SimpleImageSlider from "react-simple-image-slider";

function Working() {
    const images = [
        { url: "https://doghusky.ru/wp-content/uploads/2022/01/sa-11.jpg" },
        { url: "https://remkaz.ru/wp-content/uploads/2019/12/slide-1-2-freshblue.jpg" },
        { url: "https://www.grandactive.ru/UploadedFiles/2020/2020-10/621989c6-2d35-46c6-a933-386b7f28c2b2.jpg" },
    ];

    return (
        <div className="working">
           <div className="working__container">
               <h2 className="working__title">
                   Ремонтируем, разрабатываем и производим с 2016 года
               </h2>
               <div className="working__subcontainer">
                   <div className="working__slider">
                       <SimpleImageSlider
                           width={487}
                           height={303}
                           images={images}
                           showBullets={true}
                           showNavs={true}
                       />
                   </div>

                   <div className="working__textcontainer">
                       <p className="working__textcontainer-text">
                           Мы - научно-техническая компания.
                           С 2016 года снабжаем предприятия энергетического комплекса России приборами собственных
                           разработок.
                       </p>
                       <ul className="working__list">
                           <li className="working__list-item">
                               <div className="working__list-image">

                               </div>
                               <p className="working__list-text">
                                   Запаяли более 15 миллионов компонентов.
                               </p>
                           </li>
                           <li className="working__list-item">
                               <div className="working__list-image">

                               </div>
                               <p className="working__list-text">
                                   Изготовили более 2 000 изделий.
                               </p>
                           </li>
                           <li className="working__list-item">
                               <div className="working__list-image">

                               </div>
                               <p className="working__list-text">
                                   С 2022 года стали резидентами Сколково.
                               </p>
                           </li>

                       </ul>
                       <button className="working__button">
                           Подробнее
                       </button>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Working;
