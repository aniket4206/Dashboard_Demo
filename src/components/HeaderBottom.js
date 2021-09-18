import { PlusIcon,SearchIcon } from "@heroicons/react/solid";


function HeaderBottom() {
    return (
       <div className="select-none flex justify-between p-2 items-center text-white">
            <div className="flex flex-col">
                <h2>Dashboard</h2>
                <h3>Monday, <span className="text-blue-500">02 July 2020</span></h3>
            </div>
            <div className="flex justify-between space-x-4">
                <button className="flex p-1 items-center ml-auto mr-2 bg-blue-400 rounded"><PlusIcon className="h-4" />Adddd</button>
                <div className="flex space-x-1 items-center">
                    <SearchIcon className="h-7" />
                    <input className="shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight bg-[#423636b9]" id="username" type="text" placeholder="Search for Application Here" />
                     
                </div>
            </div>
        </div>
        
    )
}

export default HeaderBottom
