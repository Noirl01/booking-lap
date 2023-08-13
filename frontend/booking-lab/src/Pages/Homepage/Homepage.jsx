import React, { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHotel, faPlaneUp, faLocationDot, faUtensils } from '@fortawesome/free-solid-svg-icons';

import './Homepage.css'
import Hotels from '../../components/Hotels/Hotels';

const Homepage = () => {
  const [hotels, setHotels] = useState(null);
  const [showHotels, setShowHotels] = useState(true);
  const [activeButton, setActiveButton] = useState(true);
  const [showFood, setShowFood] = useState(false);
  const [showFlight, setShowFlight] = useState(false);
  const [showPlace, setShowPlace] = useState(false);
  const [showBg, setShowbg] = useState(false);
  
  const handleClick = (expression,div) => {
    const DesiredDiv = document.getElementById(`${div}`);
    if(div === "div-1")
    {
      setActiveButton(prevState=>!prevState);
    }
     showBg && DesiredDiv.classList.add('SliderButtons');
     !showBg && DesiredDiv.classList.remove('SliderButtons');

    switch (expression)
    {
    case "Flight":
    setShowFlight(prevState=>!prevState);
    setShowHotels(null);
    setShowFood(null);
    setShowPlace(null);
    break;
    case "Place":
    setShowPlace(prevState=>!prevState);
    setShowHotels(null);
    setShowFlight(null);
    setShowFood(null);
    break;
    case "Hotels":
    setShowHotels(prevState=>!prevState);
    setShowFood(null)
    setShowPlace(null);
    setShowFlight(null);
    break;
    case "Food":
    setShowFood(prevState=>!prevState);
    setShowHotels(null);
    setShowPlace(null);
    setShowFlight(null);
    break;
    }
    setShowbg(prevState=>!prevState);
  }
 
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: true,
    contain: true,
    groupCells: true
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
          <div id='div-1' className={`h-[8em] w-[6em] ml-5 rounded-[1.7rem] TextGreyColor
          ${activeButton? 'InitialBg' : 'SecondBg'}
          `}>
            <button id='Button-1' className='-mt-5 h-[8rem] w-[6em]' onClick={(e)=>handleClick("Hotels","div-1")}>
              <FontAwesomeIcon icon={faHotel} style={{ scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base'>Hotel</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div id='div-2' className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white TextGreyColor'>
            <button id='Button-2'  className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Flight","div-2")}>
              <FontAwesomeIcon icon={faPlaneUp}  style={{ scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base'>Flight</h1>
          </div>
        </div>
       <div className='flex justify-center'>
          <div id='div-3' className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white TextGreyColor'>
            <button id='Button-3' className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Place","div-3")}>
              <FontAwesomeIcon icon={faLocationDot}  style={{ scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base'>Place</h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <div id='div-4' className='h-[8em] w-[6em] ml-5 rounded-[1.7rem] bg-white TextGreyColor'>
            <button id='Button-4' className='-mt-5 h-[8rem] w-[6em]' onClick={()=>handleClick("Food","div-4")}>
              <FontAwesomeIcon icon={faUtensils}  style={{ scale:"200%"}} />
            </button>
            <h1 className='-mt-8 text-base'>Food</h1>
          </div>
        </div>
        </Flickity>
      </div>
    
        {
        showHotels?
        hotels ? 
        (
          <>
        <div className='flex flex-row mt-[2rem] gap-x-11'>
        <h1 className='text-4xl font-bold text-black'>Popular Hotels :</h1>
        <button className='text-orange-500 ml-auto pr-4'>See all</button>  
        </div>
        <div>
          <Hotels hotels={hotels} setHotels={setHotels}/>
        </div>
          </>
        )
        : 
        <h1>Loading...</h1>
        :
        showFood?
        <>
        <div className='flex flex-row mt-[2rem]'>
          <h1 className='text-3xl font-bold text-black'>Popular Restaurants :</h1>
          <button className='text-orange-500 ml-auto pr-4'>See all</button>  
        </div>
        <div>
          <h1>Restaurants here</h1>
        </div>
      </>
        :
        showPlace?
        <>
        <div className='flex flex-row mt-[2rem] gap-x-11'>
          <h1 className='text-4xl font-bold text-black'>Popular Places :</h1>
          <button className='text-orange-500 ml-auto pr-4'>See all</button>  
        </div>
        <div>
          <h1>Places here</h1>
        </div>
      </>
        :
        showFlight?
        <>
        <div className='flex flex-row mt-[2rem] gap-x-11'>
          <h1 className='text-4xl font-bold text-black'>Popular Flights :</h1>
          <button className='text-orange-500 ml-auto pr-4'>See all</button>  
        </div>
        <div>
          <h1>Flights here</h1>
        </div>
      </>
        :
        undefined
        }
        
    </div>
    </div>
  )
}

export default Homepage