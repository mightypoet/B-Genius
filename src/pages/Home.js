import React from "react";
import {Link} from "react-router-dom";
import BackgroundImage from "../images/classroom.png";
import {Typewriter} from "react-simple-typewriter"
import logo from"../images/genie.png";
function Home() {
    return(
        <div className="home" style={{ backgroundImage: `url(${BackgroundImage})`}}>
            <div className="headercontainer">
                <h2>
                    B-Genius
                    <span>
                        <Typewriter words={["LEARN SMART","WORK HARD"]} loop cursor cursorStyle="|" typespeed={70} deleteSpeed={50} delaySpeed={1000} />

                    </span>
                </h2>
                <h2>B-Genius</h2>
                <h3>Send a mail to us</h3>
                <img src={logo}/><br/>
                <a href="mailto:rohan00as@gmail.com">Click Me</a>
                <p>Get a headstart to your dream job</p>
                <Link to= "/menu">
                    <button>Take The Ride</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;
