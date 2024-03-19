import './Skolkovo.css';
import SimpleImageSlider from "react-simple-image-slider";



function Skolkovo() {

    return (
        <div className="skolkovo">

            <div className="skolkovo__container">
                <h2 className="skolkovo__title">
                    Мы инженеры - изобретатели и резиденты Сколково
                </h2>
                <p className="skolkovo__subtitle">
                    Ремонт техники для нас - как сканворды за 5-ый класс
                </p>
                <div className="skolkovo__subcontainer">
                    <div className="skolkovo__slider">

                    </div>

                    <div className="skolkovo__textcontainer">

                        <ul className="skolkovo__list">
                            <li className="skolkovo__list-item">
                                <div className="skolkovo__list-image">

                                </div>
                                <p className="skolkovo__list-text">
                                    С 2016 года мы разрабатываем,
                                    производим и реализуем по всей
                                    России приборы для энергетического кластера РФ.

                                </p>
                            </li>
                            <li className="skolkovo__list-item">
                                <div className="skolkovo__list-image">

                                </div>
                                <p className="skolkovo__list-text">
                                    Этот опыт позволяет быстро определить причины неисправности и перспективы их устранения.                                 </p>
                                 </li>
                        </ul>
                        <button className="skolkovo__button">
                            Подробнее
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skolkovo;
