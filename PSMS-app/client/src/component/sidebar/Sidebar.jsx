import React, { useState } from 'react'
import Image from '../upload/FGorangeNew.png'
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsFillImageFill, BsReverseLayoutTextSidebarReverse, BsPerson } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
import { AiFillEnvironment, AiOutlineBarChart, AiOutlineMail, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai"
import Login from '../Login/Login';
import UserList from '../UserList';


const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const Menus = [
        { title: "Dashboard", id: 1 },
        { title: "Price List", id: 2, icon: <ImPriceTags /> },
        { title: "Media", id: 3, spacing: true, icon: <BsFillImageFill /> },

        {
            title: "Projects",
            id: 4,
            icon: <BsReverseLayoutTextSidebarReverse />,
            submenu: true,
            submenuItems: [
                { title: "Submenu 1", id: 1 },
                { title: "Submenu 2", id: 2 },
                { title: "Submenu 3", id: 3 },
            ],
        },
        { title: "Analytics", id: 5, icon: <AiOutlineBarChart /> },
        {
            title: "Inbox", id: 6, icon: <AiOutlineMail />
        },
        { title: "Profile", id: 7, spacing: true, icon: <BsPerson /> },
        { title: "Setting", id: 8, icon: <AiOutlineSetting /> },
        { title: "Logout", id: 9, icon: <AiOutlineLogout /> },

    ];

    return (
        <div className='flex '>
            <div className={`bg-dark-purple h-screen p-4 ${open ? "w-[200px]" : "w-[5rem]"} duration-300 relative`}>
                <BsArrowLeftShort className={`text-dark-purple bg-white rounded-full absolute  top-7 -right-2 text-lg border border-dark-purple cursor-pointer ${!open && "rotate-180"} `} onClick={() => setOpen(!open)} />
                <div className='flex items-center  py-[0.375rem] px-[0.6rem] '>
                    <div className='inline-flex mr-1'>
                        <img className={`w-[1.8rem] h-[1.8rem] mr-2 cursor-pointer block float-left duration-500 ${open && "rotate-[360deg] "}`} src={Image} alt="logo" />
                        <h1 className={` font-normal text-white origin-left p-[2px] duration-300 ${!open && "scale-0"}`}>FGprints</h1>

                    </div>
                </div>

                {/* <div className={`flex items-center mt-4 rounded-md  bg-light-white ${!open ? "px-2" : "px-2"} py-[0.375rem]`}>
                    <BsSearch className={`block float-left text-white cursor-pointer ${open && "mr-2"} `} />
                    <input type={'search'} placeholder='Search' className={`w-full text-sm text-white bg-transparent focus:outline-none ${!open && "hidden"}`} />
                </div> */}
                <ul className='pt-1'>
                    {Menus.map((menu) => (
                        <div key={menu.id}>
                            <li className={`flex items-center  text-sm py-[0.375rem] px-[0.7rem]  text-gray-300 cursor-pointer gap-x-4 hover:bg-light-white rounded-md ${menu.spacing ? "mt-2" : "mt-3"}`}>
                                <span className='block float-left text-2xl'>
                                    {menu.icon ? menu.icon : <RiDashboardFill />}
                                </span>
                                <span className={`flex-1 text-xs/3 font-normal duration-300 origin-left || ${!open && "scale-0"}`}>{menu.title}</span>

                                {menu.submenu && open && (
                                    <BsChevronDown className={`${submenuOpen && "rotate-180"}`} onClick={() => {
                                        setSubmenuOpen(!submenuOpen)
                                    }} />
                                )}
                            </li>
                            {menu.submenu && submenuOpen && open && (
                                <ul>
                                    {menu.submenuItems.map(submenuItem => (
                                        <div key={submenuItem.id}>
                                            <li className='flex items-center  py-[0.375rem] px-10 text-xs text-gray-300 rounded-md cursor-pointer gap-x-4 hover:bg-light-white '>
                                                {submenuItem.title}
                                            </li>
                                        </div>
                                    )
                                    )}
                                </ul>

                            )}
                        </div>

                    ))}
                </ul>

            </div>

            <div className=' w-screen p-7'>
                {/* <Login /> */}
                <UserList className='card1' />
            </div>
        </div >
    )
}

export default Sidebar
