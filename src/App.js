import React from 'react'
import "./style.css"
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import MobilePage from './components/mobilepage/MobilePage';
import TabletPage from './components/tabletpage/TabletPage';
import LaptopPage from './components/laptoppage/LaptopPage';
import WatchPage from './components/watchespage/WatchPage';
import Blog from './components/blog/Blog';
import BePartner from './components/bepartner/BePartner';
import DesktopPage from './components/desktoppage/DesktopPage';
import RepairPage from './components/repairpage/RepairPage';
import Samsung from './components/allmobilebrands/Samsung';
import Redmi from './components/allmobilebrands/Redmi';
import Oneplus from './components/allmobilebrands/Oneplus';
import Realme from './components/allmobilebrands/Realme';
import Oppo from './components/allmobilebrands/Oppo';
import Poco from './components/allmobilebrands/Poco';
import Iqoo from './components/allmobilebrands/Iqoo';
import Vivo from './components/allmobilebrands/Vivo';
import Apple from './components/allmobilebrands/Apple';
import Nothing from './components/allmobilebrands/Nothing';
import TabletApple from './components/alltabletbrands/TabletApple';
import TabletSamsung from './components/alltabletbrands/TabletSamsung';
import TabletLenovo from './components/alltabletbrands/TabletLenovo';
import TabletRealme from './components/alltabletbrands/TabletRealme';
import TabletMi from './components/alltabletbrands/TabletMi';
import LaptopApple from './components/alllaptopbrands/LaptopApple';
import LaptopHp from './components/alllaptopbrands/LaptopHp';
import LaptopAcer from './components/alllaptopbrands/LaptopAcer';
import LaptopAsus from './components/alllaptopbrands/LaptopAsus';
import LaptopDell from './components/alllaptopbrands/LaptopDell';
import LaptopLenovo from './components/alllaptopbrands/LaptopLenovo';
import LaptopMi from './components/alllaptopbrands/LaptopMi';
import LaptopRealme from './components/alllaptopbrands/LaptopRealme';
import LaptopMsi from './components/alllaptopbrands/LaptopMsi';
import LaptopMicrosoft from './components/alllaptopbrands/LaptopMicrosoft';
import WatchApple from './components/allwatchesbrands/WatchApple';

const App = () => {
    return ( <
        >
        <
        Router >
        <
        Navbar / >
        <
        div className = 'app' >
        <
        Routes >
        <
        Route exact path = '/'
        element = { < HomePage / > }
        /> <
        Route exact path = '/mobile'
        element = { < MobilePage / > }
        /> <
        Route exact path = '/tablet'
        element = { < TabletPage / > }
        /> <
        Route exact path = '/laptop'
        element = { < LaptopPage / > }
        /> <
        Route exact path = '/watch'
        element = { < WatchPage / > }
        /> <
        Route exact path = '/blog'
        element = { < Blog / > }
        /> <
        Route exact path = '/partner'
        element = { < BePartner / > }
        /> <
        Route exact path = '/desktop'
        element = { < DesktopPage / > }
        /> <
        Route exact path = '/repair'
        element = { < RepairPage / > }
        /> <
        Route exact path = '/mobile/samsung'
        element = { < Samsung / > }
        /> <
        Route exact path = '/mobile/mi'
        element = { < Redmi / > }
        /> <
        Route exact path = '/mobile/oneplus'
        element = { < Oneplus / > }
        /> <
        Route exact path = '/mobile/realme'
        element = { < Realme / > }
        /> <
        Route exact path = '/mobile/oppo'
        element = { < Oppo / > }
        /> <
        Route exact path = '/mobile/poco'
        element = { < Poco / > }
        /> <
        Route exact path = '/mobile/iqoo'
        element = { < Iqoo / > }
        /> <
        Route exact path = '/mobile/vivo'
        element = { < Vivo / > }
        /> <
        Route exact path = '/mobile/apple'
        element = { < Apple / > }
        /> <
        Route exact path = '/mobile/nothing'
        element = { < Nothing / > }
        /> <
        Route exact path = '/tablet/apple'
        element = { < TabletApple / > }
        /> <
        Route exact path = '/tablet/samsung'
        element = { < TabletSamsung / > }
        /> <
        Route exact path = '/tablet/lenovo'
        element = { < TabletLenovo / > }
        /> <
        Route exact path = '/tablet/realme'
        element = { < TabletRealme / > }
        /> <
        Route exact path = '/tablet/mi'
        element = { < TabletMi / > }
        /> <
        Route exact path = '/laptop/apple'
        element = { < LaptopApple / > }
        /> <
        Route exact path = '/laptop/hp'
        element = { < LaptopHp / > }
        /> <
        Route exact path = '/laptop/acer'
        element = { < LaptopAcer / > }
        /> <
        Route exact path = '/laptop/asus'
        element = { < LaptopAsus / > }
        /> <
        Route exact path = '/laptop/dell'
        element = { < LaptopDell / > }
        /> <
        Route exact path = '/laptop/lenovo'
        element = { < LaptopLenovo / > }
        /> <
        Route exact path = '/laptop/mi'
        element = { < LaptopMi / > }
        /> <
        Route exact path = '/laptop/realme'
        element = { < LaptopRealme / > }
        /> <
        Route exact path = '/laptop/msi'
        element = { < LaptopMsi / > }
        /> <
        Route exact path = '/laptop/microsoft'
        element = { < LaptopMicrosoft / > }
        /> <
        Route exact path = '/watch/apple'
        element = { < WatchApple / > }
        /> <
        /Routes> <
        /div> <
        /Router> <
        />
    )
}

export default App