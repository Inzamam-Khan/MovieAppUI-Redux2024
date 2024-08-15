import userPlaceholderImg from '../assets/images/userPlacholderImgNew.jpeg'

export const Footer=()=>{
    return(
        <div id="footer" className="flex bg-primaryColor justify-center p-4 items-center min-h-[250px] ">
            
            <div className=" bg-transparent flex flex-col flex-1 justify-between items-center text-white  ">

                <div className="bg-transparent flex justify-between flex-1  gap-20 items-center mb-2">
                        <a href="#home" className='bg-transparent'>
                        
            <img src={userPlaceholderImg} alt="" className='rounded-full max-w-20 '/>
                    </a>

                    <div className='flex flex-col bg-transparent gap-2 items-center'>
                        <h1 className='text-[wheat] bg-transparent'>Inzamam</h1>
                        <a href="https://github.com/Inzamam-Khan/MovieAppUI-Redux2024" target='_blank' className='bg-transparent  hover:text-fontSecondary text-slate-gray ' >GitHub</a>
                    </div>
                </div>

                <div className="capitalize bg-transparent text-fontSecondary max-w-lg ">It is just a movie app UI design.
                    solely developed for testing and learning purpose.for code source kindly visit my github profile
                    </div>
                    <div className='bg-transparent capitalize my-2 text-xl font-semibold text-[wheat]'>Technologies:</div>

                
                    <div className="capitalize bg-transparent text-fontSecondary max-w-lg">React.js 
                        React Routing TailwindCSS React_Redux 
                    </div>

                <div className="text-slate-gray bg-transparent mt-8">
                Copyright. All rights reserved @ 2024</div>
            </div>
            
        </div>
    )
}