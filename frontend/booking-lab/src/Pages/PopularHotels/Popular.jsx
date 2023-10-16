import  { useEffect, useState } from 'react'
import axios from 'axios'
import HotelPic1 from '../../assets/Images/hotels1.png'
import HotelPic2 from '../../assets/Images/hotels2.png'
import HotelPic3 from '../../assets/Images/hotels3.png'
import HotelPic4 from '../../assets/Images/hotels4.png'
import HotelPic5 from '../../assets/Images/hotels5.png'
import LeftArrow from '../../assets/Images/BackArrow.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import './Popular.css'

const Popular = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
            const data = await axios
              .get("http://localhost:8800/api/hotels/")
              .then((res) => res.data)
              .then((data) => data);
            setData(data);
        }
      
      useEffect(() => {
        fetchData();
      }, []);
        
    const Images = [  
        HotelPic1,
        HotelPic2,
        HotelPic3,
        HotelPic4,
        HotelPic5
      ]

  return (
    <div className='flex flex-col container'>
        <div className='Gradient-bg'>
            <div className='ml-3'>
                <a href='/home'>
                    <img src={LeftArrow} alt='LeftArrow' className='w-[3em] scale-100 p-[0.5rem] bg-white rounded-[1.7rem] absolute mt-5'></img>
                </a>
            </div>
            <h1 className='text-4xl my-6 font-bold ml-[2em]'>Popular Hotels : </h1>
        </div>
        <div className='flex flex-wrap gap-x-7 justify-around px-5 pl-10'>
        {
        data?
        (
        data.map((data, id) => 
            <div key={id} id={data._id} className='rounded-[1.7rem] flex flex-col w-[10em] h-[10em] mt-5 text-white gradient-bg from-transparent to-black' onClick={(e)=>handleClick(e)}>
                <img src={Images[Math.floor(Math.random() * 4 +1)]} alt='none' className='object-cover -z-10  w-[10em] h-[10em] rounded-[1.7rem]  absolute'></img>
                <div className="gradient-bg from-transparent to-black flex rounded-[1.7rem] -z-10 relative"></div>
                <h1 className='font-bold text-2xl mt-[6rem] ml-5'>{data.title}</h1>
                <div className='flex flex-row ml-5'>
                <FontAwesomeIcon className='mt-[0.3rem] mr-1' icon={faLocationDot} style={{scale:"100%"}}></FontAwesomeIcon>
                <h1 className='text-lg TextGreyColor'>{data.city}</h1>
                </div>
                <h1><span className='font-bold ml-5'> ${data.cheapestPrice}</span>/night</h1>
            </div>
        )
        )
        :<h1>Loading..</h1>
        }
        </div>
    </div>
  )
}

export default Popular