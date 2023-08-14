import Flickity from 'react-flickity-component'

import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Hotels.css'



const Hotels = ({hotels, Images, Count, isFilterActive }) => {
  const SplicedHotels  =  hotels.slice(0, 5);
  const FilteredHotels =  hotels.filter(data => data.featured === true)

  isFilterActive?
    hotels = FilteredHotels : hotels = SplicedHotels;
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: true,
    contain: true,
    groupCells: true
}


  return (
    <>
    <div className='ml-5 w-full'>   
    <Flickity
          className={'carousel'}
          elementType={'div'} 
          disableImagesLoaded={false} 
          options={flickityOptions}
    >
      {
        hotels.map((data, id) => 
            <div key={id} className='rounded-[1.7rem] flex flex-col w-auto p-10 h-[15rem] ml-[1rem] text-white gradient-bg from-transparent to-black'>
                <img src={Images[Count+=1]} alt='none' className='object-cover -mt-10 -ml-10 -z-10 h-[100%] rounded-[1.7rem] w-[100%] absolute'></img>
                <div className="gradient-bg from-transparent to-black -ml-10 -mt-10 rounded-[1.7rem] -z-10 h-[15rem] w-[100%] absolute"></div>
                <h1 className='font-bold text-2xl mt-[6rem] -ml-5'>{data.title}</h1>
                <div className='flex flex-row -ml-5'>
                <FontAwesomeIcon className='mt-[0.3rem] mr-1' icon={faLocationDot} style={{scale:"100%"}}></FontAwesomeIcon>
                <h1 className='text-lg TextGreyColor'>{data.city}</h1>
                </div>
                <h1><span className='font-bold -ml-5'> ${data.cheapestPrice}</span>/night</h1>
            </div>
          )
        }
    </Flickity>
    </div>
    </>
  )
}

export default Hotels