
import React from 'react'
import Card from './Card'

export default function Tours({tours,removeTour}) {
   
    
  return (
    <div className='container'>
        <div className='tours-grid'>
           {
            tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
            }) 
           }
        </div>
    </div>
  )
}
