import React, { Component } from 'react'
import './Home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MyPic from './MyPic.svg';
export default class Home extends Component {
  render() {
    return (
      <>
        <div className='main-container'>
                <div className='MyPicClassMobile'>
                    <img src={MyPic} alt='My Profile pic'></img>
                </div>
          <section className='section-class'>
            <div className='main-page-content'>
                <h5 className='txt'>Hey! there</h5>
                <h4 className='txt'>I am </h4>
                <h1 className='txt'>Dhruv</h1>
                <p className='txt'><span className='nwrap'>Part time student,</span> <br/><span className='nwrap'> Full time developer.</span></p>
            </div>
            <div className='MyPicClass'>
              <img src={MyPic} alt='My Profile pic'></img>
            </div>
          </section> 
          

          <div className='icons'>
              <a href="https://github.com/dhruv6397" target='_blank' rel='noreferrer'><GitHubIcon className='media-icons  github'/></a>
              <a href='https://www.linkedin.com/in/dhruv-8a01a5214/' target='_blank' rel='noreferrer'><LinkedInIcon className='media-icons linkedin'/></a>
              <a href='https://www.twitter.com/dhruvverma____' target='_blank' rel='noreferrer'><TwitterIcon className='media-icons twitter'/></a>
              <a href='https://www.instagram.com/dhruv.verma___/' target='_blank' rel='noreferrer'><InstagramIcon className='media-icons instagram'/></a>
              <a href='https://www.youtube.com/@engineer.verma_' target='_blank' rel='noreferrer'><YouTubeIcon className='media-icons youtube'/></a>
              
          </div>
          
        </div>
      </>
    )
  }
}
 
