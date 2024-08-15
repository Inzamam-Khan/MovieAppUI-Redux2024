import { MdStarHalf } from 'react-icons/md'
import placeHolderImg from '../assets/images/placeholder.jpg'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetMovieById } from '../Hooks/useGetMovieById'


export const MovieDetails=()=>{
    const {getMovieById,movieDetail,loading}=useGetMovieById()
    const {id}=useParams()

    let PosterImg=movieDetail?.Poster != "N/A"? movieDetail?.Poster : placeHolderImg
   
   
    
    
    


    useEffect(()=>{
        getMovieById(id)
        
    },[id])

    return(
    
        <div className="flex justify-center mx-auto  min-w-[90vW] ">
        
            {/* two child left image part and right detail part */}

        {!loading && movieDetail? (
            
            
            <div className="flex flex-1  gap-4  sm:items-start justify-center mx-auto sm:gap-20 py-2
             max-sm:flex-col  min-w-[85.5vW]">
                   
                   
                   
                    {/* image part */}
                <div className='flex justify-center  items-center  max-sm:min-w-[100vW]  h-full'>
                    <img src={PosterImg} alt="" className='object-cover  w-[250px] rounded-xl'   />
                </div>
                


                {/* detail part */}
                <div className='flex flex-col gap-3 px-3  shadow-2xl rounded-xl sm:w-[45%] max-sm:items-center
                
                 sm:items-center max-h-max'>
                   
                   <h4 className="text-xl leading-normal text-fontSecondary hover:text-slate-gray">
                       <span>{movieDetail?.Title} </span>
                       {movieDetail?.Year}</h4>
                   
                   

                   <div className='flex flex-1 items-center flex-col gap-4 justify-evenly '>
                       <span>{movieDetail?.Actors}</span>
                       <div className='inline'>Directed By: <span className='text-fontSecondary'>{movieDetail?.Director}</span>
                       </div>
                   </div>

                   <div className='flex items-center gap-1'>
                   <MdStarHalf /> ({movieDetail?.imdbRating})
                   </div>
                   

                   <h6 className='text-slate-gray text-sm  py-4'>{movieDetail?.Plot}</h6>


               </div>

            </div>
            

        ): (
        <div role="status" className="max-sm:mx-12  min-w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
    
    
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>


    <div className="w-full  ">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5 "></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div>

)}



</div>
        
    )
}