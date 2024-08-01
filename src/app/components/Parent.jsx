import React,{useState} from 'react'
import Child from './Child'

function Parent() {

    const[data,setData]=useState()

    
    function process(data)
    {
        setData(data)
        console.log(`process data is ${data}`)
    }
  return (
    <div>
        {
            data?<h1 className='text-pink'>data is {data}</h1>:<h2>No Data</h2>
        }
        <Child handleprocess={process}/>           
    </div>                                             //process function is passed here and as a props it will be received under the child function in child.jsx

  )
}

export default Parent