import "../about/about.css"
import gamer from "../../img/bg4.jpg"
import Popo from "../../img/Popo.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={gamer} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">Born in Penang, Malaysia on March 28, 2000, I am the first child in my extended family to live and grow up as
                    an Asian-American (specifically Chinese-Malaysian-American).
                    I first moved to San Jose, CA in June of 2000 and then to Sunnyvale, CA in September of 2004. Despite the
                    lack of family in the United States,
                    I have made countless friends and discovered passions of my own,
                    including gaming, swimming, vlogging, and solving escape rooms. I am still very proud of my Southeast Asian
                    heritage even though I live as an American,
                    and I continue to celebrate the many holidays that I would have otherwise celebrated had I still lived in
                    Asia.
                </p>
                <p className="a-sub">
                    I attended Homestead High School, where I learned Spanish as a third language. I was an avid member of
                    the
                    Future Business Leaders of America (FBLA) as well as a varsity swimmer all four years of high school. During
                    this time, I learned practical business values through attending FBLA Leadership Conferences and
                    even earned awards at the state and national levels.
                </p>
                <p className="a-sub">
                    I recently graduated from the University of California, Santa Cruz with a Bachelors of Science in Computer
                    Science. It was a last minute decision as I believed that graduating early in December 2021
                    as opposed to June 2022 would allow me to take a step back on life and allow me to explore different
                    opportunities.
                    My coursework and other projects have led me down the path of web development, which I
                    enjoy the most. I was the Banquet Coordinator for the Chinese Student Association (CSA) and even led the club as one of its Co-Chairs,
                    overlooking all operations of the club in addition to helping
                    acclimate new students to college life.
                </p>
               
                <p>
                    Most recently, I have accepted a position at Walmart as a Software Engineer which I will finally begin my professional career this upcoming July.
                    I am excited to begin this new chapter and am grateful to everyone that has supported me throughout my college journey, including my parents and the many friends I got to know throughout my 3.5 years in college.
                </p>
             
                <p className="a-sub">
                    I hope this brief summary of my life helped you get to know me a bit better, if you want to know how I can
                    be beneficial to your
                    company and/or brand, please feel free to reach out to me at <a href="mailto:raylee@ucsc.edu"><i><u>raylee@ucsc.edu</u></i></a> for further questions or a resume.
                </p>
                <div className="a-company">
                    <img src={Popo} alt="" className="a-company-img" />
                    <div className="a-company-texts">
                        <h4 className="a-company-title">Chinese Student Association at UC Santa Cruz</h4>
                        <div className="a-company-role">
                            <div className="a-company-role-wrapper">
                                <p className="a-company-desc">Co-Chair<br /><i>April 2021 - June 2022</i></p>
                                <br />

                                <p className="a-company-desc">Banquet Coordinator<br /><i>April 2020 - April 2021</i></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About