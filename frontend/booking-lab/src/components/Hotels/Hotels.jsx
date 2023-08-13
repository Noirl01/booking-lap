import React from 'react'

const Hotels = ({hotels}) => {
    // const sasaMasasa = setTimeout(
    //     async() =>{ 
    //       await fetch("http://localhost:8800/api/hotels")
    //       .then(res => res.json())
    //       .then(res => setHotels(res))
    //     })
    
    //   useEffect(()=>{
    //     return ()=>{
    //     clearTimeout(sasaMasasa)
    //     }
    //   },[sasaMasasa])
  return (
    <div>
        
         {hotels.map((data, i)=> <h1 className='text-lg text-black' key={i}>{data.city}</h1>)}
    </div>
  )
}

export default Hotels