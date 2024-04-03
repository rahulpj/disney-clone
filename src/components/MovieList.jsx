import React, { useEffect, useRef, useState } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard';
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";
import HrMovieCard from './HrMovieCard';
const screenWidth = window.innerWidth;
function MovieList({genreId,index_}) {
    const elementRef = useRef(null);
    const [movieList,setMovieList]=useState([]);
    useEffect(()=>{
        getMoviesById();

    },[])
    const getMoviesById=()=>{
        GlobalAPI.getMovieByGenreId(genreId).then(function(response){
            // console.log(response.data.results);
            setMovieList(response.data.results);
        })
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= 700;
      };
    
      const sliderRight = (element) => {
        element.scrollLeft += 700;
      };
  return (
    <div className='relative'>
        <HiChevronLeft
        className={`z-[1] hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer
         ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronRight
        className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-0 z-[1] ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />
    <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide gap-8 pt-5 pb-5 px-3 scroll-smooth'>
        {movieList.map((item,index)=>(
            <>
            {index_%3==0?<HrMovieCard movie={item}/>:
            <MovieCard movie={item}/>}
            </>
            ))}
    </div>
    </div>
  )
}

export default MovieList