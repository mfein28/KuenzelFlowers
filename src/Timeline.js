import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "./logo.svg";
import DipenPatel from './Headshots/DipenPatel.png'
import JoshDunlap from './Headshots/JoshDunlap.png'
import KenKratz from './Headshots/KenKratz.png'
import WillSheriff from './Headshots/WillSheriff.png'
import MaxineAttobrah from './Headshots/MaxineAttobrah.png'
import MadelineStilley from './Headshots/MadelineStilley.png'
import GraceTang from './Headshots/GraceTang.png'
import CedricMoore from './Headshots/CedricMoore.png'
import BrandonWeathers from './Headshots/BrandonWeathers.png'
import SanjeevSingh from './Headshots/SanjeevSingh.png'
import JonahEide from './Headshots/JonahEide.png'
import AdelHassen from './Headshots/AdelHassen.png'
import FarhadSaffaraval from './Headshots/FarhadSaffaraval.png'
import KimberlyHayes from './Headshots/KimHayes.png'
import BalwinderKaur from './Headshots/BalKaur.png'
import SkyeToor from './Headshots/SkyeToor.png'
import MattFein from './Headshots/MattFein.png'
import EmilyPham from './Headshots/EmilyPham.png'
import LilaZapata from './Headshots/LilaZapata.png'
import BinuMatthew from './Headshots/BinuMatthew.png'
import JoelKonitzer from './Headshots/JoelKonitzer.png'
import ElenaKuenzel from './Headshots/ElenaKuenzel.png'
import AnaCarlaCosta from './Headshots/AnaCarlaCosta.png'
import SamirYuja from './Headshots/SamirYuja.png'
import VincentGlorioso from './Headshots/VincentGlorioso.png'
import BrandonKonkel from './Headshots/BrandonKonkel.png'
import MattEpstein from './Headshots/MattEpstein.png'
import AlecCrowell from './Headshots/AlecCrowell.png'
import ChrisFalter from './Headshots/ChrisFalter.png'
import JeffGross from './Headshots/JeffGross.png'
import DanielPuskas from './Headshots/DanielPuskas.png'
import MorganJacobi from './Headshots/MorganJacobi.png'
import KarlSchliep from './Headshots/KarlSchliep.png'
import ArjunPaudel from './Headshots/ArjunPaudel.png'
import LindsayLienau from './Headshots/LindsayLienau.png'
import TaylorHogge from './Headshots/TaylorHogge.png'
import SebastianRanasinghe from './Headshots/SebastianRanasinghe.png'
import RebeccaKurz from './Headshots/RebeccaKurz.png'
import KatrinaZell from './Headshots/KatrinaZell.png'
import MichelleCody from './Headshots/MichelleCody.png'
import Dandelion from './Flowers/dandelion.png'
import Daisy from './Flowers/daisy.png'
import Poppy from './Flowers/poppy.png'
import Tulip from './Flowers/tulip.png'
import Dahlia from './Flowers/dahlia.png'
import Rose from './Flowers/rose.png'
import Flower from './Flowers/flower.png'
import Sunflower from './Flowers/sunflower.png'
import Orchid from './Flowers/orchid.png'
import PlumBlossom from './Flowers/PlumBlossom.png'
function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>November 11, 2019</h1></div>}
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Poppy}/><h4 style={{marginTop: 4}}>
                    <i>Poppy</i></h4></div>}>
                <img style={{height: 112, width: 105}} src={ElenaKuenzel}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Elena Kuenzel</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Cheif Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>December 7, 2020</h1></div>}
                iconStyle={{background: '#ff878d', color: '#000000'}}
                contentStyle={{background: '#ff878d', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Tulip}/><h4 style={{marginTop: 4}}>
                    <i>Tulip</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={AnaCarlaCosta}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Ana Carla Costa</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>May 17, 2021</h1></div>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={MichelleCody}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Michelle Cody</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>October 11, 2021</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={SamirYuja}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Samir Yuja</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Technologist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>October 19, 2021</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={VincentGlorioso}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Vincent Glorioso</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>January 10, 2022</h1></div>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={BrandonKonkel}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Brandon Konkel</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Engineer</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>April 1, 2022</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={MattEpstein}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Matt Epstein</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>April 11, 2022</h1></div>}
                iconStyle={{background: '#673147', color: '#000000'}}
                contentStyle={{background: '#673147', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={PlumBlossom}/><h4 style={{marginTop: 4}}><i>Plum Blossom</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={AlecCrowell}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Alec Crowell</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>August 1, 2022</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={ChrisFalter}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Chris Falter</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={JeffGross}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Jeff Gross</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={DanielPuskas}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Daniel Puskas</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>August 15, 2022</h1></div>}
                iconStyle={{background: '#FF007F', color: '#000000'}}
                contentStyle={{background: '#FF007F', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Rose}/><h4 style={{marginTop: 4}}>
                    <i>Rose</i></h4></div>}
            >

                <img style={{height: 112, width: 105}} src={MorganJacobi}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Morgan Jacobi</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>October 17, 2022</h1></div>}
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Poppy}/><h4 style={{marginTop: 4}}>
                    <i>Poppy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={KarlSchliep}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Karl Schliep</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>November 14, 2022</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={ArjunPaudel}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Arjun Paudel</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>November 28, 2022</h1></div>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={LindsayLienau}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Lindsay Lienau</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>January 9, 2023</h1></div>}
                iconStyle={{background: '#ff878d', color: '#000000'}}
                contentStyle={{background: '#ff878d', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Tulip}/><h4 style={{marginTop: 4}}>
                    <i>Tulip</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={TaylorHogge}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Taylor Hogge</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>January 17, 2023</h1></div>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={SebastianRanasinghe}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Sebastian Ranasinghe</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>February 1, 2023</h1></div>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img style={{height: 112, width: 105}} src={RebeccaKurz}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Rebecca Kurz</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{background: '#F0E130', color: '#000000'}}
                date={<div style={{marginTop: -30}}><h1>April 10, 2023</h1></div>}
                iconStyle={{background: '#F0E130', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Dandelion}/><h4 style={{marginLeft: -5, marginTop: 4}}>
                    <i>Dandelion</i></h4></div>}
            >
                <img src={KatrinaZell} alt="My Image"/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Katrina Zell</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>June 6, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={DipenPatel}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Dipen Patel</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>June 12, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={MaxineAttobrah}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Maxine Attobrah</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>July 16, 2023</h1></div>}
                        iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
                // icon={<WorkIcon/>}
            >
                <img src={MadelineStilley}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Madeline Stilley</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Senior Lead Technologist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>August 14, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={GraceTang}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Grace Tang</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Engineer</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>September 5, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={CedricMoore}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Cedric Moore</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Engineer</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>September 18, 2023</h1></div>}
                        iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}

                // icon={<WorkIcon/>}
            >
                <img src={BrandonWeathers}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Brandon Weathers</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>October 23, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={SanjeevSingh}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Sanjeev Singh</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Data
                    Engineer</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>October 30, 2023</h1></div>}
                        iconStyle={{background: '#FF007F', color: '#000000'}}
                contentStyle={{background: '#FF007F', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Rose}/><h4 style={{marginTop: 4}}>
                    <i>Rose</i></h4></div>}
            >
                <img src={JonahEide}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Jonah Eide</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Sr. Data Engineer</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                    iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
            >
                <img src={AdelHassen}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Adel Hassen</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>November 13, 2023</h1></div>}
                        iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={FarhadSaffaraval}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Farhad Saffaraval</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Data Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<div style={{marginTop: -30}}><h1>November 27, 2023</h1></div>}
                        iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Poppy}/><h4 style={{marginTop: 4}}>
                    <i>Poppy</i></h4></div>}
                // icon={<WorkIcon/>}
            >
                <img src={KimberlyHayes}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Kimberly Hayes</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                    iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={BalwinderKaur}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Bal Kaur</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Data
                    Engineer</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                    iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={SkyeToor}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Skye Toor</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Data Scientist</h4>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>November 29, 2023</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#ff878d', color: '#000000'}}
                contentStyle={{background: '#ff878d', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Tulip}/><h4 style={{marginTop: 4}}><i>Tulip</i></h4></div>}
                // icon={<WorkIcon />}
            >
                <img src={MattFein}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Matt Fein</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Engineer</h4>


            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>January 8th, 2024</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Daisy}/><h4 style={{marginTop: 4}}><i>Daisy</i></h4></div>}
                // icon={<WorkIcon />}
            >
                <img src={LilaZapata}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Lila Zapata</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Data Engineer</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>January 16th, 2024</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={JoelKonitzer}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Joel Konitzer</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">ML Engineer</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>February 1, 2024</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Poppy}/><h4 style={{marginTop: 4}}>
                    <i>Poppy</i></h4></div>}>
                <img src={EmilyPham}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Emily Pham</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>February 26, 2024</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#B47CDA', color: '#000000'}}
                contentStyle={{background: '#B47CDA', color: '#000000'}}

                icon={<div><img style={{height: 50, width: 50, margin: 4}} src={Dahlia}/><h4 style={{marginTop: 4}}><i>Dahlia</i></h4></div>}
                // icon={<WorkIcon />}
            >
                <img src={BinuMatthew}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Binu Mathew</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Lead Engineer</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<div style={{marginTop: -30}}><h1>April 1st, 2024</h1></div>}
                    className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={JoshDunlap}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Josh Dunlap</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Flower}/><h4 style={{marginTop: 4}}><i></i></h4></div>}
            >
                <img src={WillSheriff}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Will Sheriff</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Data Scientist</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#0c9200', color: '#000000'}}
                contentStyle={{background: '#0c9200', color: '#000000'}}
                icon={<div><img style={{margin: 4}} src={Sunflower}/><h4 style={{marginLeft: -5, marginTop: 4}}><i>Sunflower</i></h4></div>}
            >
                <img src={KenKratz}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Ken Kratz</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Project Manager</h4>
            </VerticalTimelineElement>

        </VerticalTimeline>
    );
}

export default Timeline;
