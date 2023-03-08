import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetFlixOriginals);
      let cur;
      do {
        cur =
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ];
      } while (!cur && !cur.backdrop_path);
      setMovie(cur);
      return request;
    }
    fetchData();
  }, []);

  function trunctate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name || "Loading..."}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {movie.overview
            ? trunctate(movie.overview, 200)
            : "A NETLIX ORIGINAL"}
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
