import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import './comp.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const Swipers = () => {
  const[movie,setMovies]=useState([])

  const fetchmovies =()=>{
    // API call to fetch movies
    fetch('https://repo-tech2edge.github.io/tasks/sample.json')
     .then(response => response.json())
     .then(data => {
      console.log('Success:', data.episodes)
      setMovies(data.episodes)
     })
     .catch(error => console.error('Error:', error))
  }

  useEffect(()=>{
    fetchmovies()
  },[])
  return (
    <div className='  relative'>
      
      <div>
        <button className='swiper-button-next'></button>
        <button className='swiper-button-prev'></button>
        <button className='swiper-pagination'></button>
      </div>


      <Swiper
        slidesPerView={1}
        spaceBetween={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
          
         
         
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper px-10"
      >
        {
          movie.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='movie-card '>
                <img src={item.img} alt={item.title} className='rounded-md' />
                <div className='movie-info text-white'>
                  <h3>{item.title}</h3>
                  
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>

    

    </div>
  )
}

export default Swipers