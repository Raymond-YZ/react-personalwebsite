import "../gaming/gaming.css"
import gamer from "../../img/gamerray.jpg"
import sluggaming from "../../img/Slug_Gaming_Transparent.png"

const Gaming = () => {
    return (
        <div className="g">
            <div className="g-left">
                <h1 className="g-title">Gaming/Esports</h1>
                <br />
                <p className="g-sub">I formerly ran social media for <a href="https://twitter.com/sluggamingucsc">Slug Gaming</a>.
                    I was also the CS:GO and VALORANT director at the University of California, Santa Cruz
                    while having previously played for the CS:GO team and the first iteration of the VALORANT team.
                    During my time in CS:GO, our school team won the North American Competitive Collegiate Series league in its
                    inaugural season,
                    putting UC Santa Cruz in the record books of collegiate CS:GO.
                </p>
                <br />
                <div id="accomplishments">
                    <h4 id="csgo-title">Notable CS:GO Accomplishments</h4>
                    <ul id="csgo-list">
                        <li>NACCS Spring 2020 - UC Santa Cruz (1st)</li>
                        <li>Slug Gaming Expo LAN - UCSC Blue (2nd)</li>
                        <li>Tik Tok Cup 2020 #1 - UCSC Blue (5th)</li>
                        <li>CSL 2019-2020 Season - UCSC Blue (5th)</li>
                        <li>ESEA Open Season 28 - Team Serpent (playoffs + vs. shroud)</li>
                        <li>ESEA Main Season 30 - UC Santa Cruz</li>
                        <li>ESEA Open Season 31 - Gooner University (playoffs)</li>

                    </ul>
                    <br />
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ARlRHFMscmg"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe> */}
                    <h4 id="valorant-title">Notable VALORANT Accomplishments</h4>
                    <ul id="valorant-list">
                        <li>WGA Spring Showdown 2020 - UC Santa Cruz (1st)</li>
                        <li>UC Valorant Invitational 2021- UC Santa Cruz (2nd)</li>
                        <li>West Coast War 2020 - UC Santa Cruz (9th)</li>

                    </ul>

                    <br />

                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/tofZXB46e1E"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe> */}
                </div>


                <div className="g-company">
                    <img src={sluggaming} alt="" className="g-company-img" />
                    <div className="g-company-texts">
                        <h4 className="g-company-title">Slug Gaming</h4>
                        <div className ="g-company-role">
                            <div className="g-company-role-wrapper">
                                <p className="g-company-desc">Social Media Manager
                                    <br />
                                    <i>April 2020 - November 2021</i>
                                </p>
                                <br />
                                
                                <p className="g-company-desc">CS:GO/VALORANT Director
                                    <br />
                                    <i>April 2019 - November 2021</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="g-right">
                <div className="g-card bg"></div>
                <div className="g-card">
                    <img src={gamer} alt="" className="g-img" />
                </div>
            </div>
        </div>
    )
}

export default Gaming