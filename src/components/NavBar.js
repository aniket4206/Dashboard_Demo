import { HomeIcon, ChartSquareBarIcon, AdjustmentsIcon, FolderIcon, CalendarIcon, UserGroupIcon, ChatAltIcon } from "@heroicons/react/solid"
import { LogoutIcon, CogIcon} from "@heroicons/react/outline"
import NavIcon from "./NavIcon"


function NavBar() {
    return (
        <div className="h-6 w-6 p-5 hover:cursor-pointer space-y-7 transition duration-150">
            <NavIcon Icon={HomeIcon} />  
            <NavIcon Icon={ChartSquareBarIcon} />
            <NavIcon Icon={AdjustmentsIcon} />
            <NavIcon Icon={FolderIcon} />
            <NavIcon Icon={CalendarIcon} />
            <NavIcon Icon={UserGroupIcon} />
            <NavIcon Icon={ChatAltIcon} />
            <NavIcon Icon={LogoutIcon} />
            <NavIcon Icon={CogIcon} />

        </div>
    )
}

export default NavBar
