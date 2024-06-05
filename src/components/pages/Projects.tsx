import Navbar from "../elements/Navbar";
import "./Pages.css";

function App() {
    return (
        <div>
            <Navbar />
            <body>
                <div className="container">
                    <ul className="Projects">
                        <li>
                            <b>Project 1:</b> Basic Platform Game -{" "}
                            <a href="/files/game.png">Try it</a>
                        </li>
                        <li>
                            <b>Project 2:</b> - <a href="/">GitHub</a>
                        </li>
                    </ul>
                </div>
            </body>
        </div>
    );
}

export default App;
