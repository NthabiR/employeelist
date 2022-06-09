import logo from '../logo1.jpg'
import { Link } from 'react-router-dom';
import React from 'react';
import logo2 from '../Gallary/logo2.webp';
import logo3 from '../Gallary/logo3.webp';
import logo4 from '../Gallary/logo4.webp';
import full_lady from '../Gallary/full_lady.webp';


function Create() {
    return (
      <div>
           <body>
        {/* <!--Top Navigation Bar--> */}
        <nav>
            <img src={logo} alt="" class="logo"/>
            <ul class="genre">
                <li>MEN</li>
                <li>WOMEN</li>
            </ul>
                <ul>
                    <li><Link to="/aboutUs"></Link>ABOUT</li>
                    <li><Link to="/Contact"></Link>CONTACT US</li>
                    <li><Link to="/home" >HOME</Link></li>
                </ul>
        </nav>

        <div class="container2">
            {/* <!--Left Side--> */}
            <div class="left">
                <img src={full_lady} alt='' class="signImg"/>
            </div>
            {/* <!--Right Side--> */}
            <div class ="right">
                {/* <!--Sign I Navigator--> */}
                <nav class="crHead">
                    <h1 class="signHeading">SIGN UP</h1>
                </nav>
                {/* <!--3 Images--> */}
                    <ul>
                        <li><img src={logo2} alt='' class="p1"/></li>
                        <li><img src={logo3} alt='' class="p2"/></li>
                        <li><img src={logo4} alt='' class="p3"/></li>
                    </ul> 
                    {/* <!--Password Input--> */}
                    <div>
                        <input  class="password" type="text"  placeholder="PASSWORD" required/>
                    </div>
                    {/* <!--Sign In button--> */}
                    <div>
                        <button class="signIn" type="button" ><Link to ="signedin"> SIGN IN</Link></button>
                    </div>
                    {/* <!--Forgot password Sign Up Text--> */}
                    <div>
                        <h5 class="fgtPsw"><span class="span1">Forgot password?</span> <span>Reset</span></h5>
                        <h5 class="sUpText"><span class="span1" >Have’nt signed up yet?</span> <span><Link to = "/create">Sign up!</Link></span></h5>
                    </div>
                </div>
            </div>
            
    </body>
      </div>
    );
  }
  
  export default Create;