import React, { useState } from 'react'
import Image from '../upload/FGorangeNew.png'
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";

import { AiFillEnvironment, AiOutlineBarChart, AiOutlineFileText, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai"


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        { title: "Dashboard" },
        { title: "Pages", icon: <AiOutlineFileText /> },
        { title: "Media", spacing: true, icon: <BsFillImageFill /> },

        {
            title: "Projects",
            icon: <BsReverseLayoutTextSidebarReverse />,
            submenu: true,
            submenuItems: [
                { title: "Submenu 1" },
                { title: "Submenu 2" },
                { title: "Submenu 3" },
            ],
        },
        { title: "Analytics", icon: <AiOutlineBarChart /> },
        { title: "Inbox", icon: <AiOutlineMail /> },
        { title: "Profile", spacing: true, icon: <BsPerson /> },
        { title: "Setting", icon: <AiOutlineSetting /> },
        { title: "Logout", icon: <AiOutlineLogout /> },

    ];

    return (
        <div className='flex'>
            <div className={`bg-dark-purple h-screen p-[10px] ${open ? "w-[200px]" : "w-[3rem]"} duration-300 relative`}>
                <BsArrowLeftShort className={`text-dark-purple bg-white rounded-full absolute  top-4 -right-2 text-lg border border-dark-purple cursor-pointer ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />

                <div className='inline-flex '>
                    <img className={`w-[1.8rem] h-[1.8rem] mr-1 cursor-pointer block float-left duration-500 ${open && "rotate-[360deg] "}`} src={Image} alt="logo" />

                    <h1 className={` font-normal text-white origin-left p-[2px] duration-300 ${!open && "scale-0"}`}>FGprints
                    </h1>

                </div>

                <div className={`flex items-center mt-4 rounded-md  bg-light-white ${!open ? "px-1.5" : "px-2"} py-[0.375rem]`}>
                    <BsSearch className={`block float-left text-white cursor-pointer ${open && "mr-2"} `} />

                    <input type={'search'} placeholder='Search' className={`w-full text-sm text-white bg-transparent focus:outline-none ${!open && "hidden"}`} />
                </div>
                <ul className='pt-1 '>
                    {Menus.map((menu, index) => {
                        return (
                            <>
                                <li key={index} className={`flex items-center p-2 text-sm text-gray-300 cursor-pointer gap-x-4 hover:bg-light-white rounded-md ${menu.spacing ? "mt-5" : "mt-2"}`}>
                                    <span className='block float-left text-2xl'>
                                        {menu.icon ? menu.icon : <RiDashboardFill />}
                                    </span>
                                    <span className={`flex-1 text-sm font-medium duration-300 origin-left || ${!open && "scale-0"}`}>{menu.title}</span>

                                    {menu.submenu && open && (
                                        <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => {
                                            setSubmenuOpen(!submenuOpen)
                                        }} />
                                    )}
                                </li>
                                {menu.submenu && submenuOpen && open && (
                                    <ul>
                                        {menu.submenuItems.map((submenuItem, index) => {
                                            return (
                                                <li key={index} className='flex items-center p-2 px-5 text-sm text-gray-300 rounded-md cursor-pointer gap-x-4 hover:bg-light-white '>
                                                    {submenuItem.title}
                                                </li>
                                            )
                                        })}
                                    </ul>

                                )}
                            </>
                        )

                    })}

                </ul>

            </div>

            <div className='text-2xl font-semibold p-7'>
                Home Page
            </div>
        </div >
    )
}

export default Sidebar
