import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
           <FacebookIcon/>
           <InstagramIcon/>
           <YouTubeIcon/>
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div>
             <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preference</li>
             </ul>
          </div>
          <div>
             <ul>
                <li>Gift Cards</li>
                <li>Terms of use</li>
                <li>Corporate Information</li>
             </ul>
          </div>
          <div>
             <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact us</li>
             </ul>
          </div>
          

        </div>
        <div className='service-code'>
            <p>Service code</p>
          </div>
          <div className='copy-right'>
            &copy;1997-2025 Netflix, Inc.
          </div>

      </div>
       
    </div>
  )
}

export default Footer
