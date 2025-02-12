import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        return request;
      }
      fetchData();
    }, []);
  
    function truncate(str, n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

  return (
    <div
     className='banner'
     style={{
        backgroundSize:'cover',
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition:'center center',
        backgroundRepeat:'no-repeat'
     }}>
        <div className='banner-contents'>
            <h1 className='banner_title'>
                {movie?.title||movie?.name||movie?.orginal_name}
            </h1>
            <div className='banner-buttons'>
                <button className='banner-button play'>Play</button>
                <button className='banner-button'>My List</button>

            </div>
            <h1 className='banner-description'>{truncate(movie?.overview, 150)}</h1>

        </div>
        <div className='banner-fadebottom'></div>
      
    </div>
  )
}

export default Banner
