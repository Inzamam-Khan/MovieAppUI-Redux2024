
import { useEffect, useState } from 'react'
import {MovieCard} from './MovieCard.jsx'
import { useGetMovies } from '../Hooks/useGetMovies.js'
import { useSelector } from 'react-redux'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export const Movies=()=>{
    const {getMovies,movies,loading,getSeries,series} =useGetMovies()
    const arr=["","","","",""]
    const searchTerm=useSelector(state=>state.searchTerm)
    const [page,setPage]=useState(1);
    
    
    useEffect(()=>{

getMovies(page)
getSeries(page)

    },[searchTerm,page])

    return(
        <container className='flex  flex-col flex-1  min-w-[85.5vW] sm:mx-6 '>
                
                
                <div className="fixed  flex min-w-[86.5vW] bg-transparent  justify-between items-center max-sm:ml-5 z-40">
                
                <FaArrowAltCircleLeft onClick={()=>setPage(page=>page-1)}  className={`${page>1 ? `` : `invisible`} rounded-full cursor-pointer` }/>
                
               <div className='flex gap-1 items-center bg-transparent'>
                
                <span className='bg-transparent'>{page}</span>
                <FaArrowAltCircleRight onClick={()=>setPage(page=>page+1)}  className='rounded-full cursor-pointer' />
                    </div>
                </div>


       { !loading && movies? (

        <>      
        <div id="home" className='text-2xl font-semibold text-fontSecondary flex  border-b  justify-center border-fontSecondary mx-auto'>Movies</div>
        <div className="flex flex-1   justify-start flex-wrap gap-2  sm:mx-3  ">
          
            {movies?.map((i)=> <MovieCard {...i}/>
        )}
                     
        </div>
            
    {/* series */}
    <div id="series" className='text-2xl font-semibold text-fontSecondary flex border-b  justify-center border-fontSecondary mx-auto'>Series</div>
        <div className="flex flex-1   justify-start flex-wrap gap-2 sm:mx-3">
          
            {series?.map((i)=> <MovieCard {...i}/>
        )}
            
         
        </div>
            
    {/* latest */}

    <div id="latest" className='text-2xl font-semibold text-fontSecondary flex border-b  justify-center border-fontSecondary mx-auto'>Latest</div>
        <div className="flex flex-1   justify-start flex-wrap gap-2 sm:mx-3">
                
{
 

                     movies?.sort((a,b)=>b.Year - a.Year).map((i)=> <MovieCard {...i}/>)    
}                
{
                    series?.sort((a,b)=>b.Year - a.Year).map((i)=> <MovieCard {...i}/>)
}
 
        </div>
            


</>
       ):(
        arr.map(i=>(

            <div role="status" className="mx-7 min-w-full  space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center my-3">
    
    
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
            </div>
        
        
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
        ))
       )


        
    
}
 </container>)
}