import { Routes,Route } from "react-router-dom"



import { PageNotFound } from "./Pages/PageNotFound"

import { Movies } from "./Components/Movies"
import { MovieDetails } from "./Pages/MovieDetails"


function App() {



  return (
    <div className="text-fontPrimary  ">
        
     
{/* <Header/> */}

<Routes>
<Route path="/" element={<Movies/>}/>
<Route path="/details/:id" element={<MovieDetails/>}/>
<Route path="*" element={<PageNotFound/>}/>



</Routes>




      
      </div>
  
  )
}

export default App
