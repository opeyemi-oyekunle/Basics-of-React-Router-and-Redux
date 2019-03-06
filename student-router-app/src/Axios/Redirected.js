import React from 'react'
import {Redirect} from 'react-router-dom'

const Redirected = (props)=>{
  return(
    <div>
    <Redirect to='./about' />
    <h2>Redirected</h2>
    </div>
  )
}

export default Redirected
