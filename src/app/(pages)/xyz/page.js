'use client'
import Card from '@/app/components/Card'
import Header from '@/app/components/Header'
import Main from '@/app/components/Main'
import { useState } from 'react'


function page() {
  const [user, setuser] = useState("Mysclic")
  const [photos, setphotos] =useState([])

  const getpics = async ()=>{
    const response = await axios.get(<img src="/college.png"/>)
    const img = response.data
    console.log(img)
  }

  return (
    <>
      <div>
        
            {/* <Header user1={user}/> */}
            {/* <Main/> */}
            {/* <Card/> */}
            
      </div>
      <button onClick={getpics}Get images></button>
    </>
  )
}

export default page