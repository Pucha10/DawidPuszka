import Navbar from "../elements/Navbar";
import "./Pages.css";

function App() {
    return (
        <div>
            <Navbar />
            <body>
                <div className="AboutMeClass">
                    <p className="Header">Education</p>
                    <p className="AboutMeClass">
                        Hi, my name is Dawid and I am 22 years old. I am a
                        beginner C# developer. I like new technology and games.
                        I even create some of them myself. I am open to
                        internships, traineeships, and projects that will allow
                        me to develop as a future IT specialist.
                    </p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">Education</p>
                    <p className="AboutMeClass">
                        <li>
                            <b>2021 - Present</b>
                        </li>
                        <p>Warsaw University of Life Sciences</p>
                        <li>
                            <b>2018 - 2021</b>
                            <p>
                                High School number 3 in Radom named after
                                Dionizy Czachowski
                            </p>
                        </li>
                    </p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">Experiance</p>
                    <p className="AboutMeClass">
                        <li>
                            <b>04.2024 - Present</b>
                        </li>
                        <p>C# junior developer in Atinea</p>
                        <li>
                            <b>2021 - Present</b>
                            <p>
                                Mathematics and computer science teacher in
                                Zazumi
                            </p>
                        </li>
                    </p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">Skills</p>
                    <p className="AboutMeClass">
                        <li>
                            <b>C#</b>
                        </li>
                        <li>
                            <b>python</b>
                        </li>
                        <li>
                            <b>javascript</b>
                        </li>
                        <li>
                            <b>unity</b>
                        </li>
                        <li>
                            <b>react</b>
                        </li>
                        <li>
                            <b>SQL</b>
                        </li>
                        <li>
                            <b>git</b>
                        </li>
                        <li>
                            <b>css</b>
                        </li>
                    </p>
                </div>
            </body>
        </div>
    );
}

export default App;
