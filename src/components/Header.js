import {  HomeIcon } from "@heroicons/react/outline"
import { BellIcon, ChevronDownIcon, EmojiHappyIcon } from "@heroicons/react/solid"
import HeaderIcon from "./HeaderIcon"

function Header() {
    return (
        <header className="flex justify-between mb-3 p-3">
            
            <HeaderIcon title="Home" Icon={EmojiHappyIcon} />
            <div className="flex justify-between space-x-4">
                <HeaderIcon title="notification" Icon={BellIcon} /> 
                <h3>John  Bayer</h3>
                <img src="https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" loading="lazy" className="rounded-full h-9 w-9 hover:cursor-pointer transition duration-150 transform hover:scale-110"></img>
                <HeaderIcon Icon={ChevronDownIcon} />    
            </div>
        </header>
      
    )

}

export default Header