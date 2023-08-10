import React, { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHotel, faPlaneUp, faLocationDot, faUtensils } from '@fortawesome/free-solid-svg-icons';

import './Homepage.css'

const Homepage = () => {
  const [hotels, setHotels] = useState(null);
  const [showHotels, setShowHotels] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  
  const handleClick = (expression,e) => {
    console.log(e.target);
    switch (expression)
    {
    case "Flight":
    setShowFlight(prevState=>!prevState);
    break;
    case "Place":
    setShowPlace(prevState=>!prevState);
    break;
    case "Hotels":
    setShowHotels(prevState=>!prevState);
    break;
    case "Food":
    setShowFood(prevState=>!prevState);
    break;
    }
  }
  const sasaMasasa = setTimeout(
    async() =>{ 
      await fetch("http://localhost:8800/api/hotels")
      .then(res => res.json())
      .then(res => setHotels(res))
    })

  useEffect(()=>{
    return ()=>{
    clearTimeout(sasaMasasa)
    }
  },[sasaMasasa])
 
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: true,
    contain: true,
    groupCells: true
}


  return (
    <div className='text-black'>
      <div className='flex flex-row justify-between mb-10 mt-10'>
      <h1 className="text-4xl font-bold ml-5">Where you <br/> wanna go?</h1>
      <button className='mr-6 BoxShadow rounded-full bg-white h-[4em] w-[4em] mt-1'>
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#66627e", scale:"150%"}} />
      </button>
      </div>
      <div>
      <div className='text-center'>
        <Flickity
        className={'carousel'}
        elementType={'div'} 
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} 
        >
        <div className='flex justify-center'>
          <div className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white'>
            <button id='Button-1' className='-mt-5 h-[8rem] w-[6em]' onClick={(e)=>handleClick("Hotels",e)}>
              <FontAwesomeIcon icon={faHotel} style={{color: "#66627d", scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base text-[#66627d]'>Hotel</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white'>
            <button id='Button-2' className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Flight")}>
              <FontAwesomeIcon icon={faPlaneUp} style={{color: "#66627d", scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base text-[#66627d]'>Flight</h1>
          </div>
        </div>
       <div className='flex justify-center'>
          <div className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white'>
            <button id='Button-3' className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Place")}>
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#66627d", scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base text-[#66627d]'>Place</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white'>
            <button id='Button-4' className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Food")}>
              <FontAwesomeIcon icon={faUtensils} style={{color: "#66627d", scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base text-[#66627d]'>Food</h1>
          </div>
        </div>
        </Flickity>
      </div>
    
        {
        showHotels?
        hotels ? 
        hotels.map((data, i)=> <h1 className='text-6xl text-black' key={i}>{data.city}</h1>)  
        : 
        <h1>Loading...</h1>
        :
        showFood?
        <h1>Food here</h1>
        :
        showPlace?
        <h1>Places here</h1>
        :
        showFlight?
        <h1>Flights here</h1>
        :
        undefined
        }
        
    </div>
    </div>
  )
}

export default Homepage