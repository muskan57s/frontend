import Link from 'next/link'
import React from 'react'


function file() {

   return (
    <div>
        <p>file</p>
    <Link href='/structure' className='bg-sky-400 hover:bg-sky-600'>Go to Page</Link>
    <div>
     <button  className='py-4 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring  focus:ring-pink-400'>click me</button>
    </div>
    <ul role='list' className='p-6  divide-y divide-slate-600 text-center'>
      <li className='flex py-4 first:pt-0 last:pb-0'>Math</li>
      <li>Science</li>
      <li>History</li>
      <li>Gk</li>
    </ul>
    </div>
  )
}

export default file