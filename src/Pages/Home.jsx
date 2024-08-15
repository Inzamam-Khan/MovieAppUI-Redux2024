import { useState } from "react"
import { Footer } from "../Components/Footer"
import { Sidebar } from "../Components/Sidebar.jsx"
import { Header } from "../Components/Header"
export const Home=({children})=>{

    const [isOpen,setIsOpen]=useState(false)
    
    
   
    
    return(
        <div className="flex flex-col flex-1 justify-center gap-4 mx-auto  max-w-full">

                {/* header part */}
                <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
                
                <div className=" flex  items-start  ">
                
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
                {children}

                   
                </div>

                
                {/*footer part  */}
                
                <Footer/>
                
            
        
        </div>
    )
}