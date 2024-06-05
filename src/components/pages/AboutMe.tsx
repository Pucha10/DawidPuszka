import useDictionary from "../../useDictionary";
import Navbar from "../elements/Navbar";
import "./Pages.css";

function App() {
    const d = useDictionary();
    return (
        <div>
            <Navbar />
            <body>
                <div className="AboutMeClass">
                    <p className="Header">{d("AboutMeHeader")}</p>
                    <p className="AboutMeClass">{d("AboutMeText")}</p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">{d("EducationHeader")}</p>
                    <p className="AboutMeClass">
                        <li>
                            <b>2021 - {d("presentPeriod")}</b>
                        </li>
                        <p>{d("SGGW")}</p>
                        <li>
                            <b>2018 - 2021</b>
                            <p>{d("HighSchool")}</p>
                        </li>
                    </p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">{d("ExpierienceHeader")}</p>
                    <p className="AboutMeClass">
                        <li>
                            <b>04.2024 - {d("presentPeriod")}</b>
                        </li>
                        <p>{d("Atinea")}</p>
                        <li>
                            <b>2021 - {d("presentPeriod")}</b>
                            <p>{d("Zazumi")}</p>
                        </li>
                    </p>
                </div>
                <div className="AboutMeClass">
                    <p className="Header">{d("SkillsHeader")}</p>
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
