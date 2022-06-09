import logo from '../src/logo1.jpg'
import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
      <div>
        <body>
        <section id="banner">
            <img src={logo} alt="" class="logo"/>
            <div class="banner-text">
                <h1>DENIM BECAUSE NOTHING ELSE MATTERS!</h1>
                <p>The quality that speaks for itself</p>
                <div class="banner-btn">
                    <button  type="button" > <Link to ="/signin"  class="shopping"> SHOPPING</Link></button>
                    <button /* class="create" */ type="button"> <Link to="/create" class="create">CREATE ACCOUNT</Link></button>
{/* 
                    <li>
                        <Link to="/create">Create</Link>
                    </li> */}
                </div>
            </div>
        </section>

        

        <div id="">
            <nav>
                <img src="Gallary/logo1.jpg" alt="" class="logo"/>  
                <ul>
        
                </ul>
            </nav>
        </div>
    </body>
      </div>
    );
  }
  
  export default Home;