import React from 'react'
import '../css/currentwork.css'

function CurrentWork(props){
    return (
        <>
            <div className='currentwork'>
                <p><strong>{props.title}</strong></p>
                <p>{props.date}</p>
                <p>{props.desc}</p>
               <p><a target='_blank' href=''>Learn More</a> | <a target='_blank' href=''>{props.data}</a></p> 
            </div>

        </>


  )
}

export default CurrentWork
