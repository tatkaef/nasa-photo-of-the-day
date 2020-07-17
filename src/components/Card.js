import React, { useState, useEffect } from "react";
import axios from 'axios';



function Card() {
    const [card, setCard] = useState([]);
    
    const promise =axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-07-15')
   
    useEffect(() => { 
        promise.then(res => { 
            console.log(res.data)
            setCard(res.data)
            })         
        .catch(err => {console.log('Err', err)});
    }, [])


  return (
    <div className="card">
    <div className="date">Date:  {card.date}</div>
    <img
          alt='post thumbnail'
          className='image'
          src={card.hdurl}
        />
        <div className="copyright">Сopyright: {card.copyright}</div>    
        <div className="namePhoto">Name of Photo: {}</div> 
    </div>
  );
}

export default Card;