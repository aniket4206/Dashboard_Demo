import BarChart01 from './BarChart01';
import BottomSection from './BottomSection';
import BottomSectionPieGraph from './BottomSectionPieGraph';
import Content1_Data from './Content1_Data';

import Widgets from './Widgets';
import MiddleSection1 from './MiddleSection1'


function MiddleSection() {
    return (
    
                <>
                <div className="xl:flex flex-row">
                   <div>
                   <Content1_Data />
                   <div className="xl:flex flex-grow">
                   <BarChart01 />
                    <MiddleSection1 />
                    </div>
                    <div className="xl:flex">
                    <BottomSection />
                    <BottomSectionPieGraph />
                    </div>
                   </div>
                   
                   <Widgets />
                </div>
                </>
    )
}

export default MiddleSection