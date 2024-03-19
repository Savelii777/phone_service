import './App.css';
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar"
import First from "../First/First";
import { PageContextProvider } from '../../contexts/PageContext';
import {useState} from "react";
import Footer from "../Footer/Footer";
import {Routes, Route} from "react-router-dom";
import {AppRoute} from "../../utils/constants";
import MainPage from "../MainPage/MainPage";
import ServicePage from "../ServicePage/ServicePage";
import LaptopPage from "../LaptopPage/LaptopPage";
import SmartphonePage from "../SmartphonePage/SmartphonePage";
import TabletPage from "../TabletPage/TabletPage";
import OtherPage from "../OtherPage/OtherPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactsPage from "../ContactsPage/ContactsPage";
import PCPage from "../PCPage/PCPage";
import PopupDiagnostic from "../PopupDiagnistic/PopupDiagnostic";


function App() {
    const [activeItem, setActiveItem] = useState(null);

    return (
    <div className="App">
        <PageContextProvider value={{ activeItem, setActiveItem }}>
            <PopupDiagnostic/>

            <Header/>
              <NavBar/>
            <Routes>
                <Route path={AppRoute.Main} element={
                    <MainPage/>
                } />

                <Route path={AppRoute.TV} element={
                    <ServicePage/>
                } />
                <Route path={AppRoute.Laptop} element={
                    <LaptopPage/>
                } />
                <Route path={AppRoute.Smartphone} element={
                    <SmartphonePage/>
                } />
                <Route path={AppRoute.Taplet} element={
                    <TabletPage/>
                } />
                <Route path={AppRoute.Other} element={
                    <OtherPage/>
                } />

                <Route path={AppRoute.About} element={
                    <AboutPage/>
                } />
                <Route path={AppRoute.Contacts} element={
                    <ContactsPage/>
                } />
                <Route path={AppRoute.PC} element={
                    <PCPage/>
                } />
            </Routes>
            <Footer/>
            {/*  <Header/>*/}
      {/*  <NavBar/>*/}
      {/*  <First*/}
      {/*      backgroundImage={'https://i0.photo.2gis.com/images/branch/0/30258560050082866_3243.jpg'}*/}
      {/*      title={'Сеть сервисных центров в г. Санкт-Петербурге и в г. Мурино'}*/}
      {/*      subtitle1={'Бесплатный выезд мастера/курьер'}*/}
      {/*      subtitle2={'Железная гарантия на все услуги'}*/}
      {/*  />*/}
      {/*<Achievements/>*/}
      {/*      <Working/>*/}
      {/*      <Believe/>*/}
      {/*      <Contacts/>*/}
      {/*      <Footer/>*/}

        </PageContextProvider>

    </div>
  );
}

export default App;
