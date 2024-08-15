import { useState } from "react"
import { useSelector } from "react-redux";

export function useGetMovies(){
    
    const [movies,setMovies]=useState(null);
    const [series,setSeries]=useState(null)
    const[loading,setLoading]=useState(true)
    

    const searchValue=useSelector(state=>state.searchTerm);
    


    const getMovies=async(p="",year="")=>{


        setLoading(true)
        try {
            
        const result=await fetch(`https://www.omdbapi.com/?s=${searchValue || `cars`}&type=movie &y=${year}&page=${p}&apikey=fe3511c9`,{})
        const data=await result.json()
        
        setMovies(data.Search)
        } catch (error) {
            console.log(error.message)
            
        }finally{
            setLoading(false)
        }
        


    }



    const getSeries=async(p="",year="")=>{


        setLoading(true)
        try {
            
        const result=await fetch(`https://www.omdbapi.com/?s=${searchValue || `cars`}&type=series &y=${year}&page=${p}&apikey=fe3511c9`,{})
        const data=await result.json()
        
        setSeries(data.Search)
        } catch (error) {
            console.log(error.message)
            
        }finally{
            setLoading(false)
        }
        


    }


    
    
    
    
    
    
    
    
    
    return{getMovies,movies,loading,getSeries,series,}
}