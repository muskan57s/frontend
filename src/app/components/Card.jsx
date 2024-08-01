import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
  return (
    <>
      <div className="border-black">
          <div className="flex  justify-center">
            <h2>Profile</h2>
            <img src='college.png'/>
          </div>
      </div>
    </>
  )
}

export default Card