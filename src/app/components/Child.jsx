import React from 'react'

function Child(props) {                 // we'll receive the process funciton as a props here
  return (                              // when we pass 2000 as a data then the function process in parent will receive it
    <div>
        {/* <button onClick={props.handleprocess}>handle process</button> */}
        <button onClick={()=>props.handleprocess(5000)}>handle process</button> 
    </div>
  )
}

export default Child