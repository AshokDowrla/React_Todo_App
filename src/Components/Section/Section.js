import React from 'react'
import './Section.css'
const title=(props)=>{
    return(
        <div>
       
    <h5 className={(props.title==='COMPLETED')? 'Title lasttitle' :'Title' }>{props.title}</h5>
    <hr />
    </div>
    )
}

export default title