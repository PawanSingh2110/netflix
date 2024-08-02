import React, { useEffect, useState } from "react";
import "./comp.css";
import { FaPlay, FaPlayCircle, FaRegPlayCircle } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./comp.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  const [value, setValue] = useState("Season1");
  const [movie, setMovies] = useState([]);
  const [episode, setEpisode] = useState("1");

  const fetchmovies = () => {
    // API call to fetch movies
    fetch("https://repo-tech2edge.github.io/tasks/sample.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data.episodes);
        setMovies(data.episodes);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  return (
    <div className="  relative">
      <div className="hero h-[100vh]   ">
        <div className="flex xl:flex-col gap-5 xl:gap-20  text-white text-md lg:text-xl  absolute left-16 md:left-24 lg:left-14 xl:left-0 xl:top-[30%] bottom-52 lg:bottom-48  xl:bottom-0">
          <button
            className={`px-5 py-3 text-start xl:rotate-90  ${
              value === "Season1" ? "border-b-2" : " "
            } `}
            onClick={() => setValue("Season1")}
          >
            Season1
          </button>
          <button
            className={`px-5 py-3 xl:rotate-90 text-start  ${
              value === "Season2" ? "border-b-2" : ""
            } `}
            onClick={() => {
              setValue("Season2"), setEpisode("0");
            }}
          >
            Season2
          </button>
        </div>
        <div className="text-white absolute text-center flex flex-col items-center lg:items-start lg:text-start right-5 lg:right-40 xl:right-10 top-44 lg:top-[30%] ">
          <h1 className="hero-title text-6xl lg:text-7xl font-medium uppercase">
            sacred <span className="text-red-600 ">games</span>
          </h1>
          <div className="flex items-center gap-1">
            <p className=" text-xl lg:text-2xl mt-1 ">{value}</p>
            <p className=" text-xl lg:text-5xl lg:mb-3 ">.</p>
            <p className=" text-xl lg:text-2xl mt-1 ">Episode {episode}</p>
          </div>
          <div className="flex  gap-5 mt-4">
            <button className="flex gap-1 text-xs lg:text-lg bg-red-600 px-7 py-2  items-center">
              <FaPlay /> Resume
            </button>
            <button className="flex gap-1 text-xs lg:text-lg  bg-transparent px-7  py-2 border-2  items-center">
              <IoMdAdd /> Mylist
            </button>
          </div>
        </div>
        {/* ///swiper */}
        <div className=" absolute w-full bottom-1">
          <div className=" w-full  relative">
            <div className="arrow absolute w-full top-16 md:top-20 lg:top-0 lg:relative  flex justify-between px-5 py-5 ">
              <button className="swiper-button-prev bg-white border px-4 py-3  rounded-full "></button>
              <button className="swiper-button-next bg-white border px-4 py-3  rounded-full"></button>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
              }}
              breakpoints={{
                425: {
                  slidesPerView: 1,
                  spaceBetween: 3,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 3,
                },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper px-10"
            >
              {movie.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="movie-card relative  "
                    onClick={() => setEpisode(item.id)}
                  >
                    <div>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="rounded-md"
                      />
                      <div className="movie-info text-white absolute bottom-3 w-full flex justify-between px-4">
                        <h3>{item.title}</h3>
                        <h3>Episode{item.id}</h3>
                      </div>
                      <div className="top-0  absolute bg-red-600/40 opacity-0 hover:opacity-95  w-full h-full rounded-lg flex justify-center items-center">
                        {" "}
                        <FaRegPlayCircle className="text-white text-6xl " />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
