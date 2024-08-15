import { useState } from "react";

export function useGetMovieById(){
    const [movieDetail,setMovie]=useState(null)
    const[loading,setLoading]=useState(true)
    
    const getMovieById=async(search)=>{
        
            setLoading(true)
            try {
                const result=await fetch(`https://www.omdbapi.com/?i=${search}&plot=full&apikey=fe3511c9`)
        const data=await result.json();
        
        setMovie(data)
                
            } catch (error) {
                console.log(error)
                
            }finally{
                setLoading(false)
            }
        

    }
    
    
    return{getMovieById,movieDetail,setMovie,loading}
}