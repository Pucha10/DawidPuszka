import useDictionary from "../../useDictionary";
import Navbar from "../elements/Navbar";
import "./Pages.css";

function App() {
    const d = useDictionary();
    return (
        <div>
            <Navbar />
            <body>
                <div className="container">
                    <ul className="Projects">
                        <li>
                            <b>{d("projekt")} 1:</b> {d("platformowa")} -{" "}
                            <a href="/">GitHub</a>
                        </li>
                        <li>
                            <b>{d("projekt")} 2:</b> {d("karciana")} -{" "}
                            <a href="/">GitHub</a>
                        </li>
                    </ul>
                </div>
            </body>
        </div>
    );
}

export default App;
