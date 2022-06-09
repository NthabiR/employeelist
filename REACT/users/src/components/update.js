import logo from '../logo1.jpg'
import medium_lady from '../Gallary/medium_lady.png'
import React, { useState } from 'react';
import Axios from 'axios';


function Update() {

    /*const [fullName, setFullName] = useState("");
    const [staffNo, setStaffNo] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail] = useState("");
    const [rate, setRate] = useState(0);*/

    const [UserData, setUserData] = useState({
        fullName: '',
        staffNo: '',
        occupation: '',
        email: '',
        rate: 0
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setUserData(preveState => ({
            ...preveState,
            [name]: value
        }))
    }


    /*ADD FUNCTION*/
    const addToList = () => {
        const k = Axios.post("http://localhost:3001/insert", UserData);
        console.log(k);
    };

    return (
        <div>
            <body>
                {/* <!--Top Navigation Bar--> */}
                <nav>
                    <img src={logo} alt="" class="logoInn" />
                    <ul class="genre">
                        <li>MEN</li>
                        <li>WOMEN</li>
                    </ul>
                    <ul>
                        <li><a href="aboutUs.html"></a>ABOUT</li>
                        <li><a href="contactUs.html"></a>CONTACT US</li>
                        <li><a href="signedIn.html"></a>HOME</li>
                    </ul>
                </nav>

                {/* <!--Update Heading--> */}
                <nav class="updateNav">
                    <h1 class="updateHeading">UPDATE EMPLOYEE</h1>
                </nav>
                {/* <!--Big  Conatiner--> */}
                <nav class="updateNav2">
                    {/* <!--Left pic--> */}
                    <div class="left">
                        <img src={medium_lady} alt="" class="updateImg" />
                    </div>
                    <div class="right">
                        {/* <!--Full Name--> */}
                        <div>
                            <input class="fullName" type="text" name='fullName' value={UserData.fullName} onChange={handleChange} placeholder="FULL NAME" required />
                        </div>
                        {/* <!--Stuff Number--> */}
                        <div>
                            <input class="stuffNum" type="text" name='staffNo' value={UserData.staffNo} onChange={handleChange} placeholder="STUFF NO" required />
                        </div>
                        {/* <!--Occupation--> */}
                        <div>
                            <input class="occupation" type="text" name='occupation' value={UserData.occupation} onChange={handleChange} placeholder="OCCUPATION" required />
                        </div>
                        {/* <!--Email--> */}
                        <div>
                            <input class="emailUpD" type="text" name='email' value={UserData.email} onChange={handleChange} placeholder="E-MAIL" required />
                        </div>
                        {/* <!--Star Rater--> */}
                        <div>
                            <input class="starTainer" type="number" name='rate' value={UserData.rate} onChange={handleChange} placeholder="*****"  /* class="stars" */ required />
                        </div>
                        {/* <!--Update Delete Exit buttons--> */}
                        <div class="buttons">
                            <button class="update">UPDATE</button>
                            <button class="delete">DELETE</button>
                            <button class="exit">DONE</button>
                            <button class="add" onClick={addToList}>ADD EMPLOYEE</button>

                        </div>

                    </div>
                </nav>
            </body>
        </div>
    );
}

export default Update;