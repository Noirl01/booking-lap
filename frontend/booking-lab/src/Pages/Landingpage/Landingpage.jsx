
import { Link } from 'react-router-dom'
import HotelPic1 from '../../assets/Images/hotels1.png'
import HotelPic2 from '../../assets/Images/hotels2.png'
import HotelPic3 from '../../assets/Images/hotels3.png'
import HotelPic4 from '../../assets/Images/hotels4.png'
import HotelPic5 from '../../assets/Images/hotels5.png'
import HotelPic6 from '../../assets/Images/hotels6.png'

import './Landingpage.css'

const Landingpage = () => {
    
    return (
      <>
    <div className='md:mx-auto justify-center items-center text-center w-full flex flex-wrap flex-col'>
        <div className='flex flex-row mx-5 gap-x-2'>
            <div>
                <img className='rounded-2xl mt-[30%] mb-5' src={HotelPic3} alt=''></img>
                <img className='rounded-2xl' src={HotelPic1} alt=''></img>
            </div>
            <div>
                <img className='rounded-2xl -mt-2' src={HotelPic2} alt=''></img>
                <img className='rounded-2xl' src={HotelPic4} alt=''></img>
            </div>
            <div>        
                <img className='rounded-2xl mt-[30%]' src={HotelPic5} alt=''></img>
                <img className='rounded-2xl' src={HotelPic6} alt=''></img>
            </div>
        </div>
        <div>
            <h1 className='text-black md:text-6xl text-4xl font-bold mt-5'>Easy way to <br/>book your hotel <br/> with us!</h1>
            <h1 className='text-gray-600 md:text-3xl text-2xl'>Also book flight ticket,<br/> places, food and many more.</h1>
            
             {   
                <Link to="/signup" 
                    className='text-white absolute -ml-[45vw] BoxShadow bg-[#4ca6fe] rounded-3xl p-[1rem] w-[90vw] mt-5 text-2xl'>
                    Get Started
                </Link>
        
             }
        </div>
        

    </div>
    <div className='justify-around flex md:h-[15rem]'>
    
    </div>

  </>
    )

}

export default Landingpage