import { DotsVerticalIcon } from"@heroicons/react/solid"
import BottomSectionPie from "./BottomSectionPie"

function BottomSectionPieGraph() {
    return (
        <div className="p-2 m-2 select-none">
            <div className="flex justify-between">
                <h3>Open Positions By Department</h3>
                <DotsVerticalIcon className="h-5" />
            </div>
            <BottomSectionPie />
        </div>
    )
}

export default BottomSectionPieGraph