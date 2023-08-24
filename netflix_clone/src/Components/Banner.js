import axios from '../axios';
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"; // Import the movieTrailer function
import requests from '../requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const [trailerVideoId, setTrailerVideoId] = useState(null); // Define trailerVideoId state

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const randomIndex = Math.floor(Math.random() * request.data.results.length);
            setMovie(request.data.results[randomIndex]);
        }
        fetchData();
    }, []);

    const handleToggleTrailer = async () => {
        if (showTrailer) {
            // If trailer is already playing, close it
            setShowTrailer(false);
            setTrailerVideoId(null); // Reset the video ID
        } else {
            // If trailer is not playing, open it
            try {
                const url = await movieTrailer(movie?.name || movie?.title || "");
                const urlParams = new URLSearchParams(new URL(url).search);
                const videoId = urlParams.get('v');
                if (videoId) {
                    setTrailerVideoId(videoId);
                    setShowTrailer(true);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const opts = {
        height: "250",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className="banner-contents">
                <h1 className='banner-title'>{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className='banner-buttons'>
                    <button className='banner-button' onClick={handleToggleTrailer}>
                        {showTrailer ? "Close Trailer" : "Play Trailer"}
                    </button>
                    <button className='banner-button'>My List</button>
                </div>

                <div className='banner-description'>{movie?.overview}</div>
            </div>

            {showTrailer && <YouTube videoId={trailerVideoId} opts={opts} />}

            <div className='banner-fadeBottom' />
        </header>
    )
}

export default Banner;
