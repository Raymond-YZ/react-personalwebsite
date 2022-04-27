import "./intro.css"
import fullbody from "../../img/fullbody.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {

    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h1 className="i-name"> Raymond Lee</h1>

                   

                    <h2 className="i-intro">B.S. Computer Science <br /> UC Santa Cruz '21</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Front-End Developer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                    <div className="i-desc">

                        Hello, and welcome to my personal website!  I mainly created this website so that I can document my past projects,
                        but also give people an insight of who I am outside of work. I love swimming, photographing/vlogging, going on drives,
                        and occasionally competing in VALORANT for fun.
                        I am an incoming software engineer at Walmart Inc. and will be beginning my tech career this July! I am looking forward to this next chapter!

                    </div>

                    <h4 className="socials-title">Check out my Socials:</h4>
                    <ul className="socials">
                        <li><a href="https://www.facebook.com/RayYZLee/"><i class="fa fa-facebook-square"></i></a></li>
                        <li><a href="https://www.twitter.com/frostyofthecity"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/raymondlee2000/"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/Raymond-YZ"><i class="fa fa-github"></i></a></li>
                        <li><a href="https://www.twitch.tv/frostyofthecity"><i class="fa fa-twitch"></i></a></li>
                    </ul>



                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={fullbody} alt="" className="i-img" />
            </div>

        </div>
    )
}

export default Intro