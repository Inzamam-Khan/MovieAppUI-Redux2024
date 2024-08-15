import { MdStarHalf } from 'react-icons/md'
import placeHolderImg from '../assets/images/placeholder.jpg'

import { Link } from 'react-router-dom'

export const MovieCard=({Title,Year,Type,Poster,imdbID})=>{
    let PosterImg=Poster!= "N/A"? Poster: placeHolderImg
    
    return(
        
                
            <div className=" my-4 flex justify-center items-start flex-1 max-sm:min-w-[180px] cursor-pointer
             shadow-2xl rounded-3xl max-sm:max-w-[180px] min-w-[200px] max-w-[200px] gap-1 mx-[1%] ">

<Link to={`/details/${imdbID}`}>
                <div className="flex flex-col flex-1 gap-1 rounded-3xl ">
                   
                    <img src={PosterImg} alt="" className='h-full w-full rounded-lg object-cover ' />
                  
                    <div className=' flex flex-col gap-1 px-3 rounded-xl '>
                   
                    <h4 className="text-xl leading-normal text-fontSecondary hover:text-slate-gray">
                        <span>{Title} </span>
                        {Year} </h4>
                    
                    </div>

                    <div className='mt-auto flex flex-col flex-1 items-end justify-end capitalize text-slate-gray '>
                        <span>{Type}</span>                    

                </div>
        
            </div>
            </Link>  
        </div>

        
    )
}