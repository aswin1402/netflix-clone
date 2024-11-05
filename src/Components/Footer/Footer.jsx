import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>
          Audio Description
        </li>
        <li>
         Help Center
        </li>
        <li>
          Gift Cards
        </li>
        <li>
          Media Center
        </li>
        <li>
          Investors Relation
        </li>
        <li>
         Jobs
        </li> <li>
          Terms of Uses
        </li>
        <li>
        Privicy
        </li>
        <li>
         Leagal Notices
        </li>
        <li>
        Cookies Preferences
        </li>
        <li>
         Corprate Information
        </li>
        <li>
          Contact Us
        </li>

      </ul>
      <p className="copyright-text">@ 1997-2023 netflix, inc</p>
    </div>
  )
}

export default Footer
