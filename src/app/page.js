'use client'
import axios from 'axios'

import React, { useState } from 'react'

function page() {
  const [Images,setImages] = useState([])
  const getImg = async ()=>{
    
   try {
    const response = await axios.get("https://picsum.photos/v2/list")        //sheriyans
    const data = response.data;
    setImages(data)
    console.log(Images)
   } catch (error) {
    console.log("Error Fetching Images")            
   }
  }
  return (
    <div>
      <button onClick={getImg} className='p-5 py-3 m-5 bg-blue-600 text-white'>Get Images</button>
      <div className='p-10'>
        {
          Images.map((elem,i)=>{
           return <img key={i} src={elem.download_url}
           height={300}
           width={300}
           className='m-10 inline-block'
           />
          })
        }
      </div>
      
    </div>
  )
}

export default page