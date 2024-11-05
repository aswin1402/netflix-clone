import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const {id}=useParams();
  const navigate=useNavigate();
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjFlNzgyNDMzNWQyYjNhNDg0MzE5MDdmYWU3YTI5MSIsIm5iZiI6MTczMDU2MzgxMC4yNzM3MTE0LCJzdWIiOiI2NzI2NDJkZTQ3MWJiODBhMDc1MzFjNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.g2RdVab7DFF8UDfnbdSRy5h1kbsaTix_qN-SFXhv30I'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res =>setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  
  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
