import React from 'react'
import mock from './images/image-mockups.png';
import './images/landing.css'
import bg from './images/bg-intro-desktop.svg';
import api from './images/icon-api.svg';
import bu from './images/icon-budgeting.svg';
import board from './images/icon-onboarding.svg';
import bk from './images/icon-online.svg';
import confetti from './images/image-confetti.jpg';
import currency from './images/image-currency.jpg';
import plane from './images/image-plane.jpg';
import res from './images/image-restaurant.jpg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import pin from './images/icon-pinterest.svg';
import insta from './images/icon-instagram.svg';
import logo from './images/logo.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Landing = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
      },[])
  return (
  <>  <div className='top'>
        <div>
            <h1>
                Gobank the next generation of digital banking
            </h1>
            <p>
                Take your finanace life online. Your Gobank account will be in one b2b for spending,saving,budgeting and much more
            </p>
            <div>
                <button>Create an Account</button>
            </div>

        </div>
        <div className='img'>
        < img src={mock}/>
        </div>
  
 
    </div>
    <div className='main'>
        <div className='why'  data-aos="fade-in">
            <h2>
                Why choose Gobank?
            </h2>
            <p>We leverge open banking to turn your bank account into your financial hub. Control your finances like never before</p>
        </div>
        <div className='services'>
            <div  data-aos="zoom-in">
            <img src={bk}/>
                <b>Online Banking</b>
                <p>Our modern web and mobile application allow you to keep track of your finances wherever you are in theworld</p>
            </div>
            <div  data-aos="fade-in">
            <img src={bu}/>
                <b>Simple Budgeting</b>
                <p>See exactly where your money goes each month. Receive notifications when you are close to hitting your limits</p>
            </div>
            <div data-aos="fade-up">
            <img src={board}/>
                <b>Fast Onboarding</b>
                <p>We dont do branches. Open your account inminutes online and start taking control of your finances right away</p>
            </div>
            <div  data-aos="fade-in">
                <img src={api}/>
                <b>Open API</b>
                <p>Manage your savings, investments pension and much more from one account. Tracking your money has never been easier</p>
            </div>
        </div>
    </div>
    <div className='articles'>
        <h2>Read Our Blog</h2>
        <div className='article'>
        <div  data-aos="slide-left">
            <img src={confetti}/>
            <b>Our invite only Beta accounts are now live</b>
            <p>After a lot of hard work by the whole team, we are excited to launch our closed beta.
                It's easy to request an invite through the site.
            </p>
        </div>
        <div  data-aos="zoom-in">
        <img src={currency}/>
        <b>Receive money in any currency with no fees</b>
        <p>The world is getting smaller and we are becoming more mobile, why should you be forced to only recieve money in a single</p>
        </div>
        <div  data-aos="fade-in">
        <img src={plane}/>
        <b>Take your Gobank card wherever you go</b>
        <p> We want you to enjoy your travels.This is why we dont charge any fees on card purchase</p>
        </div>
        <div  data-aos="zoom-in">
        <img src={res}/>
        <b>Treat yourself without worrying about money</b>
        <p>
           Our simple budgetting feature allows you to separate out your spending and set realisitic limits each month.
        </p>
        </div>
    </div>
    </div>
    <div className='bottom'>
        <div className='last'>
        <div >
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}> <img src={bg} style={{width:'50px'}}/><b>GoBank</b> </div>
           <div>
               <img src={twitter}/>&nbsp; &nbsp; 
               <img src={insta}/>&nbsp; &nbsp; 
               <img src={pin}/>&nbsp;&nbsp; 
               <img src={youtube}/>
           </div>
        </div>
        <div  >
            <ul>
                <li>
                   <b> Careers</b>
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Support
                </li>
            </ul>
        </div>
        <div  >
            <ul>
                <li>
                   <b> About Us</b>
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Blog
                </li>
            </ul>
        </div>
        <div className='open' >
            <button>Google playstore</button>
            <span>hikay133@gmail.com</span>
        </div>
     
    </div>
    </div>
   
   
</>
    )
}

export default Landing