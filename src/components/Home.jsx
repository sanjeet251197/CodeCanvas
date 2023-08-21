import React from 'react';
import vg from "../assets/2.webp";
import {  AiFillGoogleCircle,
    AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
   <>
    <div className='home'>
    <main>
        <h1>CodeCanvas</h1>
        <p>Solution to all your problems</p>
    </main>
      
    </div>
    <div className="home2">
        <img src ={vg} alt ="Graphics" />
        <div>
            <p>We are your one and only solution to the tech problems you face 
            every day . We are leading tech company whose aim is to increase the peoblem solving ability in children 
            </p>
        </div>

    </div>

    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>

At CodeCanvas, we are not just ordinary software engineers; we are passionate problem solvers and innovation enthusiasts dedicated to crafting exceptional digital solutions. Our team comprises tech-savvy professionals who embrace challenges with a full sack of skills, creativity, and collaborative spirit. With a commitment to excellence, we turn ideas into reality and code into experiences.



 We possess a comprehensive understanding of both front-end and back-end technologies, allowing us to create holistic applications that seamlessly bridge user interfaces with powerful functionalities.


</p>
        </div>
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
            <div style ={{
                animationDelay: "0.3s",
            }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
                
            </div>
            <div style ={{
                animationDelay: "0.5s",
            }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                
            </div>

            
            <div style ={{
                animationDelay: "0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
                
            </div>
            <div style ={{
                animationDelay: "1s",
            }}>
                <AiFillInstagram/>
                <p>Instagram</p>
                
            </div>
            

            </article>
        </div>

    </div>

   </>
  )
}

export default Home
