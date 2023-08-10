import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';
import '../../assets/Images/SocialIcons/css/fontello.css';

const Navbar = () => {

    const [endReached, setEndReached] = useState(false);
    const [onMobile, setOnMobile] = useState(false);

    useEffect(() => {

      let WindowY = window.innerWidth > 768;
      WindowY ? setOnMobile(false) : setOnMobile(true);


     
      window.addEventListener("scroll", () => {
        isEndOfPage()?  
        (setEndReached(setTimeout(()=>{prevState=>!prevState}, 500))) : (setEndReached(endReached));
      })
      const isEndOfPage = () => {
          const body = document.body;
          const html = document.documentElement;
          const windowHeight = "innerHeight" in window ? window.innerHeight : html.offsetHeight;
          const scrollPosition = "pageYOffset" in window ? window.scrollY : (html || body.scrollTop) - (body.clientTop || 0);
          const scrollable = body.scrollHeight || body.offsetHeight;
          const scrolledToBottom = Math.ceil(scrollPosition + windowHeight) >= scrollable;
          console.log("endofpage");
          return scrolledToBottom; 
        }
        const handleScroll = () => {
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    
  return (
     
        onMobile ? 
        (
        <>
         <div className='fixed bottom-0 duration-1000 flex p-5 ml-[15vw] text-blue-500'>        
            <a href='/'>
              <FontAwesomeIcon className='SocialIconsHover mr-7 mt-[0.1rem]' icon={faHouseChimney} style={{color: "#4ca6fe"}} />
            </a>
            <a href='/favorite'>
              <i className='icon-heart mr-5 '></i>
            </a>
            <a href='/calendar'>
            <i className='icon-calendar mr-5'></i>
            </a>
            <a href='/chat'>
            <i className='icon-chat-empty mr-5'></i>
            </a>
            <a href='/profile'>
            <i className='icon-user '></i>
            </a>
          </div>
        </>
          ) : (
          !endReached ? 
          (
          <div className='fixed duration-1000 top-0 mt-5'>
            <h1>Test</h1>
          </div>
        ) : (
          <div className='fixed duration-1000 top-0 translate-y-[95vh]'>
             <h1>Test</h1>
          </div>
        )
      )
  )
}

export default Navbar