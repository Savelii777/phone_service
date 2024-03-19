import './Companies.css';
import SimpleImageSlider from "react-simple-image-slider";


function Companies() {
    const images = [
        { url: "https://doghusky.ru/wp-content/uploads/2022/01/sa-11.jpg" },
        { url: "https://remkaz.ru/wp-content/uploads/2019/12/slide-1-2-freshblue.jpg" },
        { url: "https://www.grandactive.ru/UploadedFiles/2020/2020-10/621989c6-2d35-46c6-a933-386b7f28c2b2.jpg" },
    ];
    return (
        <div className="companies">
            <h2 className="companies__title">
                Нам доверяют лидеры рынка
            </h2>
            <p className="companies__subtitle">
                Работаем как с физическими, так и с юридическими лицами
            </p>
            <div className="companies__image">

            </div>
            <p className="companies__subtitle">
                Некоторые фотографии наших работ:
            </p>
            <div className="companies__slider">
                <SimpleImageSlider
                    width={752}
                    height={430}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
            <button className="ompanies__button">
                Подробнее
            </button>
        </div>
    );
}

export default Companies;
