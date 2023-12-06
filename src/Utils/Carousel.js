import { useEffect, useState } from "react"

const data=[
    "https://wallpapers.com/images/high/random-background-3840-x-2095-iucanxbl8i4j2uva.webp",
    "https://wallpapers.com/images/high/random-background-2560-x-1515-l6xvoej43ydtoiz8.webp",
    "https://wallpapers.com/images/high/random-background-1920-x-1080-4b23cyqwxwij490o.webp", 
  ]

export const Carousel=()=>{
    const [img,setImg]=useState(0)
    useEffect(()=>{
       const timer= setTimeout(()=>{
            setImg((img+1)%data.length)
        },3000)
        return ()=> clearTimeout(timer);
    },[img])
    return (
      <>
      <div className="flex justify-center" >
        <button onClick={()=>{
            if(img===0){setImg(data.length-1)}
            else{
            setImg((img-1))}
        }}  className=' p-4 m-4 font-bold bg-black text-white h-36 rounded-xl shadow-2xl mt-36'  >  Prev </button>
        <img alt="carousel img" src={data[img]} className='object-contain w=[500px] rounded-xl shadow-2xl'   />
        <button onClick={()=>{
            setImg((img+1)%data.length)
        }}  className='p-4 m-4 font-bold bg-black text-white h-36 rounded-xl shadow-2xl mt-36'  > Next </button>
      </div>
      </>
    )
  }