import { useState } from "react"
import { FaHeart, FaStar, FaTelegramPlane } from "react-icons/fa"
import { FcAbout } from "react-icons/fc"
import { MdContactSupport, MdDarkMode, MdHome } from "react-icons/md"
import { Link } from "react-router-dom"

export const Sidebar=({isOpen,setIsOpen})=>{
    
    



    const sidebarItems=[

        {
            label:"Home",
            icon:<MdHome fill="wheat" size={24}/>,
            link:"/"
        },
        {
            label:"Series",
            icon:<FaHeart size={20} fill="wheat" />,
            link:"#series"
        },
        ,{
            label:"Popular",
            icon:<FaStar  size={21} fill="wheat"/>,
            link:""
        },
        {
            label:"Latest",
            icon:<FaTelegramPlane size={20} fill="wheat" />,
            link:"#latest"
        },
        {
            label:"Mode",
            icon:<MdDarkMode size={23} fill="wheat" />,
            link:""
        },
        {
            label:"About",
            icon: <MdContactSupport size={23} fill="wheat"/>,
           
            link:"#footer"
        }
    ]



    return(<div className={ `transform ease-in-out  transition-all duration-300 ${isOpen? `translate-x-0` : `max-sm:-translate-x-40`} max-sm:fixed flex items-center justify-center bg-transparent`}>
        <div className={`flex flex-col  items-start max-w-[200px]  gap-8 h-[70vH]  py-14  border-r border-primaryColor `}>

            {sidebarItems.map((item)=>(
               
               <a  key={item.label}href={item.link || ""}>

               <div onClick={()=>setIsOpen(false)} className=" flex flex-1 gap-3 cursor-pointer hover:text-slate-gray rounded-full px-3 items-center font-semibold text-fontSecondary justify-between ">
                    <button >
                    {item.icon} 
                        
                    </button>

                    <div className="">{item.label}</div>
                    
                </div>
                </a>
            ))}
                
        
        
        </div>


    </div>
        
    )
}