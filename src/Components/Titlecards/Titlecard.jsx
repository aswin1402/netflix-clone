import React, { useEffect, useRef, useState } from 'react';
import './Title.css';
import { Link } from 'react-router-dom';


const Titlecard = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjFlNzgyNDMzNWQyYjNhNDg0MzE5MDdmYWU3YTI5MSIsIm5iZiI6MTczMDU2MzgxMC4yNzM3MTE0LCJzdWIiOiI2NzI2NDJkZTQ3MWJiODBhMDc1MzFjNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g2RdVab7DFF8UDfnbdSRy5h1kbsaTix_qN-SFXhv30I'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
        .then((res) => res.json())
        .then((res) => setApiData(res.results))
        .catch((err) => console.error(err));
    };

    fetchData(); // Fetch data initially or when category changes

    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]); // Add category to dependency array

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
           return <Link to={`/player/${card.id}`}
           className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.original_title || "Title Image"}
            />
            <p>{card.original_title}</p>
          </Link>
          
          
})}
      </div>
    </div>
  );
};

export default Titlecard;
