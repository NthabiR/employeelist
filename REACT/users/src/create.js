import logo from './logo1.jpg'
import plus_lady from './Gallary/plus_lady.png'
import { Link } from 'react-router-dom';



function Create() {
  
    return (
      <div>
           <body>
        {/* <!--Top Navigation Bar--> */}
        <nav>
            {/* <!--Logo--> */}
            <img src={logo} alt="" class="logoInn"/>
            {/* <!--Male & Female--> */}
            <ul class="genre">
                <li>MEN</li>
                <li>WOMEN</li>
            </ul>
                <ul class= "navLinks">
                    <li><Link to="/aboutUs"></Link>ABOUT</li>
                    <li><Link to="/Contact"></Link>CONTACT US</li>
                    <li><Link to="/home" >HOME</Link></li>
                </ul>
        </nav>

        <div class="container2">
            <div class="left">
                <img src={plus_lady} alt="" class="createImg"/>
            </div>
            <div class ="right">
                {/* <!--Create Acc Heading--> */}
                <nav class="crHead">
                    <h1 class="createHeading">CREATE ACCOUNT</h1>
                </nav>
                {/* <!--First Name--> */}
                <div>
                    <input  class="fname" type="text" onChange={(event)=>{setRegistername(event.target.value) }} placeholder="FIRST NAME" required/>
                </div>
                {/* <!--SurName-->  */}
                <div>
                    <input  class="lname" type="text"  placeholder="SURNAME" required/>
                </div>
                {/* <!--Email--> */}
                <div>
                    <input  class="email" type="text"  placeholder="E-MAIL" required/>
                </div>
                {/* <!--Password-->  */}  
                 <div>
                    <input  class="createPwd" type="text"  placeholder="PASSWORD" required/>
                </div>
                {/* <!--Confirm Password--> */}
                <div>
                    <input  class="confrimPass" type="text"  placeholder="CONFIRM PASSWORD" required/>
                </div>
                {/* <!--Sign In--> */}
                <div>
                    <button class="crtSignUp" href="signedIn.html" type="button"><Link to ="/signin">SIGN UP</Link></button>
                </div>
                {/* <!--Already Signed UP Text--> */}
                <div>
                    <h5 class="alrsUp"><span class="span1">Already have an account? </span> <span> <Link to= "/signin">Sign in</Link></span></h5>
                </div>
            </div>
        </div>  
    </body>
      </div>
    );
  }
  
  export default Create;