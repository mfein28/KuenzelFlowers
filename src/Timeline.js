import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "./logo.svg";
import KatrinaZell from './Headshots/KatrinaZell.png'
import MichelleCody from './Headshots/MichelleCody.png'
import DipenPatel from './Headshots/DipenPatel.png'
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
import Dandelion from './Flowers/dandelion.png'
import Daisy from './Flowers/daisy.png'
import Poppy from './Flowers/poppy.png'
import Tulip from './Flowers/tulip.png'
import Dahlia from './Flowers/dahlia.png'
import Rose from './Flowers/rose.png'
import Flower from './Flowers/flower.png'
function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F0E130', color: '#000000' }}

                date={<h1>April 10, 2023</h1>}
                iconStyle={{ background: '#F0E130', color: '#000000' }}
                icon={<img src={Dandelion} />}
            >
                <img src={KatrinaZell} alt="My Image" />
                <h3 style={{color:"#000000"}} className="vertical-timeline-element-title">Katrina Zell</h3>
                <h4 style={{color:"#000000"}} className="vertical-timeline-element-subtitle">Dandelion</h4>
                <p style={{color:"#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>June 6, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}

                // icon={<WorkIcon />}
            >
                <img src={DipenPatel}/>

                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Dipen Patel</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>June 12, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={MaxineAttobrah}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Maxine Attobrah</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>July 16, 2023</h1>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<img src={Daisy} />}
                // icon={<WorkIcon />}
            >
                <img src={MadelineStilley}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Madeline Stilley</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Daisy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>August 14, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={GraceTang}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Grace Tang</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>September 5, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={CedricMoore}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Cedric Moore</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>September 18, 2023</h1>}
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<img src={Daisy} />}

                // icon={<WorkIcon />}
            >
                <img src={BrandonWeathers}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Brandon Weathers</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Daisy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>October 23, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={SanjeevSingh}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Sanjeev Singh</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>October 30, 2023</h1>}
                iconStyle={{background: '#FF007F', color: '#000000'}}
                contentStyle={{background: '#FF007F', color: '#000000'}}
                icon={<img src={Rose}/>}
            >
                <img src={JonahEide}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Jonah Eide</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Rose</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<img src={Daisy} />}
                >
                <img src={AdelHassen}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Adel Hassen</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Daisy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>November 13, 2023</h1>}
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={FarhadSaffaraval}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Farhad Saffaraval</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<h1>November 27, 2023</h1>}
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<img src={Poppy} />}
                // icon={<WorkIcon />}
            >
                <img src={KimberlyHayes}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Kimberly Hayes</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Poppy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={BalwinderKaur}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Balwinder Kaur</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={SkyeToor}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Skye Toor</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<h1>November 29, 2023</h1>}
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ff878d', color: '#000000'}}
                contentStyle={{background: '#ff878d', color: '#000000'}}
                icon={<img src={Tulip} />}
                // icon={<WorkIcon />}
            >
                <img src={MattFein}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Matt Fein</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Tulip</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<h1>January 8th, 2024</h1>}
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}
                icon={<img src={Daisy} />}
                // icon={<WorkIcon />}
            >
                <img src={LilaZapata}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Lila Zapata</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Daisy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<h1>January 16th, 2024</h1>}
                className="vertical-timeline-element--work"
                iconStyle={{background: '#87CEEB', color: '#000000'}}
                contentStyle={{background: '#87CEEB', color: '#000000'}}
                icon={<img src={Flower} />}
            >
                <img src={JoelKonitzer}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Joel Konitzer</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<h1>February 1, 2024</h1>}
                className="vertical-timeline-element--work"
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}
                icon={<img src={Poppy} />}
                // icon={<WorkIcon />}
            >
                <img src={EmilyPham}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Emily Pham</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Poppy</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date={<h1>February 26, 2024</h1>}
                className="vertical-timeline-element--work"
                iconStyle={{background: '#B47CDA', color: '#000000'}}
                contentStyle={{background: '#B47CDA', color: '#000000'}}

                icon={<img src={Dahlia} />}
                // icon={<WorkIcon />}
            >
                <img src={BinuMatthew}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Binu Mathew</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Dahlia</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
    );
}

export default Timeline;
