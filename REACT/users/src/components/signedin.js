import logo from '../logo1.jpg'
import { Link } from "react-router-dom";
import senior_d from '../Gallary/senior_d.png'
import star from '../Gallary/4star.png'
import skinny_b from '../Gallary/skinny_b.png'
import production from '../Gallary/production.png'
import medium_lady from '../Gallary/medium_lady.png'
import junior_d from '../Gallary/junior_d.png'
import updatemenu from '../Gallary/update_menu.jpg'




function Signedin() {
    return (
      <div>
        {/*  <!--Top Navigation Bar--> */}
        <nav>
            <img src={logo} alt="" class="logoInn"/>
            <ul class="genre">
                <li>MEN</li>
                <li>WOMEN</li>
            </ul>
                <ul>
                    <li><Link to ="aboutUs"></Link>ABOUT</li>
                    <li><Link to="contactUs"></Link>CONTACT US</li>
                    <li><Link to="/home" >HOME</Link></li>
                </ul>
        </nav>

        {/* <!--Signed In Heading--> */}
        <div class="sInDiv">
            <nav class="sInHead">
                <h1 class="sInHeading">MEET OUR EMPLOYEES !!</h1>
            </nav>
            {/* <!--Search Navigator--> */}
           <div>
               <input class="search" type="text" placeholder="Search by name" required/>
           </div>     
        </div>

        {/* <!--First Row of Employees--> */}
        <div class="row1">
            <div class="a">
                <div class="a1">
                    <img src={senior_d} alt="" class="senior"/>
                </div>
                <div class="a2">
                {/* <!--Update option--> */}
                    <nav class="upDmenu">
                        <a href="update.html">
                            <img src={updatemenu} alt='' class="update_m"/>
                        </a>
                    </nav>
                    {/* <!--Full Name--> */}
                    <nav class="nameNav">
                        <h1 class="name">Peter Brown</h1>
                    </nav>
                    {/* <!--Stuff Number--> */}
                    <nav class="stfNav">
                       <h1 class="stfNo">FT003</h1>
                    </nav>
                    {/* <!--Occupation--> */}
                    <nav class="occNav">
                        <h1 class="occ">SENIOR DESIGNER</h1>
                    </nav>
                    {/* <!--Email--> */}
                    <nav class="mailNav">
                       <h1 class="mail">pbrown@ft.co.za</h1>
                    </nav>
                    {/* <!--Star Rater--> */}
                    <nav class="strNav">
                        <img src={star} alt="" class="Instar"/>
                    </nav>
                </div>
            </div>
            {/* <!--bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb--> */}
            <div class="b">
                {/* <!--b11111111111111111111111111111111111111111111111111111111111111--> */}
                <div class="b1">
                    <img src={skinny_b} alt="" class="skinny"/>
                </div>
                {/* <!--b22222222222222222222222222222222222222222222222222222222222222--> */}
                <div class="b2">
                    {/* <!--Update option--> */}
                    <nav class="upDmenu">
                        <a href="update.html">
                            <img src={updatemenu} alt='' class="update_m"/>
                        </a>
                    </nav>
                    {/* <!--Full Name--> */}
                    <nav class="nameNav">
                        <h1 class="name">Nthabiseng Jackie</h1>
                    </nav>
                    {/* <!--Stuff Number--> */}
                    <nav class="stfNav">
                       <h1 class="stfNo">FT008</h1>
                    </nav>
                    {/* <!--Occupation--> */}
                    <nav class="occNav">
                        <h1 class="occ">SALES EXECUTIVE</h1>
                    </nav>
                    {/* <!--Email--> */}
                    <nav class="mailNav">
                       <h1 class="mail">jackien@ft.co.za</h1>
                    </nav>
                    {/* <!--Star Rater--> */}
                    <nav class="strNav">
                        <img src={star} alt="" class="Instar"/>
                    </nav>
                </div>
            </div>
        </div>

        {/* <!--ROW 2222222222222222222222222222222222222222222222222222222222222222--> */}
        <div class="row2">
            {/* <!--AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA--> */}
            <div class="c">
                <div class="c1">
                    <img src={medium_lady} alt="" class="plus"/>
                </div>
                <div class="c2">
                    {/* <!--Update option--> */}
                    <nav class="upDmenu">
                        <a href="update.html">
                            <img src={updatemenu} alt='' class="update_m"/>
                        </a>
                    </nav>
                    {/* <!--Full Name--> */}
                    <nav class="nameNav">
                        <h1 class="name">Cynthia Shalore</h1>
                    </nav>
                    {/* <!--Stuff Number--> */}
                    <nav class="stfNav">
                       <h1 class="stfNo">FT005</h1>
                    </nav>
                    {/* <!--Occupation--> */}
                    <nav class="occNav">
                        <h1 class="occ">CREATIVE DIRECTOR</h1>
                    </nav>
                    {/* <!--Email--> */}
                    <nav class="mailNav">
                       <h1 class="mail">cynthias@ft.co.za</h1>
                    </nav>
                    {/* <!--Star Rater--> */}
                    <nav class="strNav">
                        <img src={star} alt="" class="Instar"/>
                    </nav>
                </div>
            </div>
            {/* <!--BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB--> */}
            <div class="d">
                <div class="d1">
                    <img src={production} alt="" class="thulz"/>
                </div>
                <div class="d2">
                    {/* <!--Update option--> */}
                    <nav class="upDmenu">
                        <a href="update.html">
                            <img src={updatemenu} alt='' class="update_m"/>
                        </a>
                    </nav>
                    {/* <!--Full Name--> */}
                    <nav class="nameNav">
                        <h1 class="name">Thulani Zulu</h1>
                    </nav>
                    {/* <!--Stuff Number--> */}
                    <nav class="stfNav">
                       <h1 class="stfNo">FT001</h1>
                    </nav>
                    {/* <!--Occupation--> */}
                    <nav class="occNav">
                        <h1 class="occ">Production MANAGER</h1>
                    </nav>
                    {/* <!--Email--> */}
                    <nav class="mailNav">
                       <h1 class="mail">tzulu@ft.co.za</h1>
                    </nav>
                    {/* <!--Star Rater--> */}
                    <nav class="strNav">
                        <img src={star} alt="" class="Instar"/>
                    </nav>
                </div>
            </div>
                {/* <!--CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC--> */}
                <div class="e">
                    <div class="e1">
                        <img src={junior_d} alt="" class="hannah"/>
                    </div>
                    <div class="e2">
                        {/* <!--Update option--> */}
                    <nav class="upDmenu">
                        <a href="update.html">
                            <img src={updatemenu} alt='' class="update_m"/>
                        </a>
                    </nav>
                        {/* <!--Full Name--> */}
                        <nav class="nameNav">
                            <h1 class="name">Hannah Samuels</h1>
                        </nav>
                        {/* <!--Stuff Number--> */}
                        <nav class="stfNav">
                           <h1 class="stfNo">FT009</h1>
                        </nav>
                        {/* <!--Occupation--> */}
                        <nav class="occNav">
                            <h1 class="occ">JUNIOR DESIGNER</h1>
                        </nav>
                       {/*  <!--Email--> */}
                        <nav class="mailNav">
                           <h1 class="mail">hsamuels@ft.co.za</h1>
                        </nav>
                        {/* <!--Star Rater--> */}
                        <nav class="strNav">
                            <img src={star} alt="" class="Instar"/>
                        </nav>
                    </div>
                </div>

        </div>

      </div>
    );
  }
  
  export default Signedin;