import  { useEffect, useState } from 'react'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './HotelsByID.css'

import Heart from '../../assets/Images/Heart.png'
import LeftArrow from '../../assets/Images/BackArrow.png'
import Share from '../../assets/Images/Share.png'
import Contact from '../../assets/Images/Contact.png'
import Bed from '../../assets/Images/Bed.png'
import Bath from '../../assets/Images/Bath.png'
import Dinner from '../../assets/Images/Dinner.png'
import AC from '../../assets/Images/AC.png'
import Man from '../../assets/Images/Man.png'

import HotelPic1 from '../../assets/Images/hotels1.png'
import HotelPic2 from '../../assets/Images/hotels2.png'
import HotelPic3 from '../../assets/Images/hotels3.png'
import HotelPic4 from '../../assets/Images/hotels4.png'
import HotelPic5 from '../../assets/Images/hotels5.png'

const HotelsByID = () => {
    const [data, setData] = useState(null);
    const Images = [
        HotelPic1,HotelPic2,HotelPic3,HotelPic4,HotelPic5
    ]
    const ShowText = () => {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }

    const fetchData = async () => {
            const data = await axios
              .get(`http://localhost:8800/api/hotels/`)
              .then((res) => res.data)
              .then((data) => data);
            //   console.log(window.location.pathname.split("/")[2]);
              let id =  window.location.href.split("/").pop(-1);
              const DesiredHotel = data.find(hotel => hotel._id === id)
              setData(DesiredHotel);
        }
    useEffect(()=>{
            fetchData();
    },[])
    return (
        <>
            {
                data?
                <div className='overflow-hidden'>
                    <div className='h-[50vh] rounded-[1.7rem]'>
                        <img src={Images[Math.floor(Math.random() * 4 +1)]} alt='not loaded yet' className='absolute -z-10 w-full'></img>
                        <div className='flex w-screen p-3'>
                            <a href="/home" className='mr-auto ml-5 mt-5 bg-white rounded-full'>
                                <img src={LeftArrow} className='w-[3em] scale-75 p-[0.5rem] ' alt="Test"></img>
                            </a>
                            <div className='mt-5 flex mr-5'>
                            <a href="/home" className='bg-white rounded-full w-[3.5rem]'>
                                <img src={Share} className='mr-5 w-[3em] p-[0.5rem] ' alt="Test"></img>
                            </a> 
                            <a href="/home" className='bg-white rounded-full w-[3.5rem] pl-1 ml-3'>
                                <img src={Heart} className='mr-5 w-[3em] p-[0.5rem] ' alt="Test"></img>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-[1.7rem] bg-white absolute w-screen -mt-[3em]'>
                        <div className='container ml-5 mt-[3em] flex flex-col mb-7'>
                            <div className='flex flex-col w-full'>
                                <h1 className='text-5xl font-bold'>{data.name} Hotel</h1>
                            </div>
                            <div className='flex mt-8'>
                                    <FontAwesomeIcon icon={faLocationDot} className='mt-2 mr-4' style={{ scale: "200%" }}></FontAwesomeIcon>
                                    <h1 className='font-bold text-3xl TextGreyColor'>{data.city}</h1>
                            </div>
                            <div className='ml-auto pr-10 -mt-[2.1em]'>
                                <h1 className='text-2xl'><span className='text-4xl font-bold'>${data.cheapestPrice}</span>/night</h1>
                            </div>
                        </div>
                        <div className='ml-5'>
                            <div className='w-11/12'>
                                <hr className='bg-black mt-5'/>
                                <div>
                                <p className='mt-10 md:text-2xl'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
                                    <span id="dots">...</span>
                                    <span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, 
                                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. 
                                    Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis 
                                    imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue 
                                    eros non fermentum. Sed dapibus pulvinar nibh tempor porta...
                                    </span>
                                    <button className='text-orange-500' onClick={ShowText} id="myBtn">Read more</button>
                                </p>
                                </div>
                            </div>
                            <div className='mt-5 text-black'>
                                <div>
                                <h1 className='text-4xl font-bold'>What we Offer</h1>
                                </div>
                                <div className='flex mt-5 w-full mr-2 mb-10m md:mb-[5vh] TextGreyColor flex-wrap md:flex-nowrap justify-center text-center'>
                                    <div className='w-[30vw] mx-3 text-center Card'>
                                        <img src={Bed} alt='Bed'></img>
                                        <h1 className='font-bold  mt-[5vw]'>2 Bed</h1>
                                    </div>
                                    <div className='w-[30vw] mx-3 Card'>
                                    <img src={Dinner} a6lt='Dinner'></img>
                                    <h1 className='font-bold  mt-[5vw]'>Dinner</h1>

                                    </div>
                                    <div className='w-[30vw] mx-3 Card'>
                                        <img src={Bath} alt='Bath'></img>
                                        <h1 className='font-bold  mt-[5vw]'>Hot Tub</h1>
                                    </div>
                                    <div className='w-[30vw] mx-3 Card'>
                                        <img src={AC} alt='AC'></img>
                                        <h1 className='font-bold mt-[5vw]'>1 AC</h1>
                                    </div>
                                  </div>
                                <h1 className='text-4xl font-bold'>Hosted by</h1>
                                <div className='flex row p-3'>
                                    <img src={Man} className='w-[4em] -ml-3 mr-3' alt='man'></img>
                                    <div className='flex flex-col'>
                                        <h1 className='text-3xl'>Harleen Smith</h1>
                                        <h1 className='TextGreyColor text-2xl'>1.4k reviews</h1>
                                    </div>
                                </div>  
                                <br/>
                            </div>
                        </div>
                        <a href="/home" className='rounded-[1.7rem] mr-5 overflow-hidden mb-5 bg-orange-500 fixed right-0 bottom-0'>
                            <img src={Contact}  className='scale-75 w-[4em] bg-white rounded-[1.7rem]' alt="Test"></img>
                        </a>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
      )
}

export default HotelsByID