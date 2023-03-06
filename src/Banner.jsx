import React from 'react';
import './Banner.css'

function Banner() {
  function trunctate(string ,n){
    return string?.length > n ? string.substr(0,n-1) + "...":string
  }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundPosition:"center center",
        backgroundImage:`url('https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg')`

    }}>
        <div className="banner_contents">
            <div className="banner_title">Movie Name</div>
            <div className="banner_buttons">

                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className='banner_description'>{trunctate(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,200)}</h1>
        </div>
        <div className="banner-fadeBottom"/>

       


    </header>
  );
}

export default Banner;