import { FaSearch } from 'react-icons/fa'
import appLogo from '../assets/icons/appLogo.jpg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../Hooks/Actions'
import { Link } from 'react-router-dom'

export const Header=({isOpen,setIsOpen})=>{

    const[searchValue,setSearchValue]=useState("")
    const dispatch=useDispatch()


   const  handleSearch=()=>{
    dispatch(setSearchTerm(searchValue))

    }
    
    return(
        <div className=" flex gap-2 bg-primaryColor justify-center px-4 py-4 items-center ">

<div onClick={()=>setIsOpen(!isOpen)} 
                className="sm:hidden  text-white  
                cursor-pointer  bg-transparent flex justify-center items-center ">
                    {isOpen ?  <IoMdClose  size={18}/>
                    :
                    <RxHamburgerMenu />
                     }
                </div> 
            
            <div className=" bg-transparent flex flex-1 max-w-md max-sm:flex-row-reverse max-sm:justify-start justify-evenly items-center">


                            {/*image part  */}
                            <Link to="/" className='rounded-full bg-transparent'>
                            
                <div className="border border-primaryColor flex items-center justify-center min-w-[2em] rounded-full">
                    <img src={appLogo} alt="" className="rounded-full object-cover w-[2em]"  />
                    </div>
                    </Link>


                        {/* input part */}

                        <div className=' rounded-full flex flex-1 max-w-max px-2 '>

              
                <div className="bg-transparent rounded-full flex flex-1 justify-center items-center gap-4 ">
                    
                    
                    <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} className=' text-white  py-2 rounded-full px-4 outline-none' placeholder='Search' />
                    
                        <div onClick={handleSearch} className='rounded-full items-center justify-center flex bg-transparent cursor-pointer'>
                        <FaSearch fill='white'/>
                        </div>

                    
                    
                </div>

                </div>
            </div>
            
        </div>
    )
}