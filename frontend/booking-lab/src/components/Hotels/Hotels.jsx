import Flickity from 'react-flickity-component'

import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Hotels.css'

import HotelPic1 from '../../assets/Images/hotels1.png'
import HotelPic2 from '../../assets/Images/hotels2.png'
import HotelPic3 from '../../assets/Images/hotels3.png'
import HotelPic4 from '../../assets/Images/hotels4.png'
import HotelPic5 from '../../assets/Images/hotels5.png'

const Hotels = ({hotels}) => {
  const flickityOptions = {
    initialIndex: 0,
    lazyLoad: true,
    contain: true,
    groupCells: true
}
const Images = [  
  HotelPic1,
  HotelPic2,
  HotelPic3,
  HotelPic4,
  HotelPic5
]
let Count = -1;
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
        hotels.slice(0, 5).map((data, id) => 
            <div key={id} className='rounded-[1.7rem] flex flex-col w-auto p-10 h-[15rem] ml-[1rem] text-white gradient-bg from-transparent to-black'>
                <img src={Images[Count+=1]} alt='none' className='-mt-10 -ml-10 -z-10 h-[100%] rounded-[1.7rem] w-[100%] absolute'></img>
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