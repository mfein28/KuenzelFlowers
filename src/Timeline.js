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
function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#F0E130', color: '#000000' }}

                date="April 10, 2023"
                iconStyle={{ background: '#F0E130', color: '#000000' }}
                // icon={<WorkIcon />}
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
                date="June 6, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

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
                date="June 12, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                date="July 16, 2023"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}

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
                date="August 14, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                date="September 5, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                date="September 18, 2023"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}

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
                date="October 23, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                date="October 30, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
            >
                <img src={JonahEide}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Jonah Eide</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
            >
                <img src={AdelHassen}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Adel Hassen</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 13, 2023"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                date="November 27, 2023"
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}

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
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
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
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
            >
                <img src={SkyeToor}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Skye Toor</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="November 29, 2023"
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ff878d', color: '#000000'}}
                contentStyle={{background: '#ff878d', color: '#000000'}}

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
                date="January 8th, 2024"
                className="vertical-timeline-element--work"
                iconStyle={{background: '#ebd582', color: '#000000'}}
                contentStyle={{background: '#ebd582', color: '#000000'}}

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
                date="January 16th, 2024"
                className="vertical-timeline-element--work"
                iconStyle={{background: '#b6b6b6', color: '#000000'}}
                contentStyle={{background: '#b6b6b6', color: '#000000'}}

                // icon={<WorkIcon />}
            >
                <img src={JoelKonitzer}/>
                <h3 style={{color: "#000000"}} className="vertical-timeline-element-title">Joel Konitzer</h3>
                <h4 style={{color: "#000000"}} className="vertical-timeline-element-subtitle">Unknown</h4>
                <p style={{color: "#000000"}}>
                    Job Description
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date="February 1, 2024"
                className="vertical-timeline-element--work"
                iconStyle={{background: '#E35335', color: '#000000'}}
                contentStyle={{background: '#E35335', color: '#000000'}}

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
                date="February 26, 2024"
                className="vertical-timeline-element--work"
                iconStyle={{background: '#B47CDA', color: '#000000'}}
                contentStyle={{background: '#B47CDA', color: '#000000'}}


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
