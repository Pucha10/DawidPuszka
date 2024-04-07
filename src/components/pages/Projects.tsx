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
                            <strong>Projekt 1:</strong> Opis projektu 1 -{" "}
                            <a href="/">GitHub</a>
                        </li>
                        <li>
                            <strong>Projekt 2:</strong> Opis projektu 2 -{" "}
                            <a href="/">GitHub</a>
                        </li>
                        <li>
                            <strong>Projekt 3:</strong> Opis projektu 3 -{" "}
                            <a href="/">GitHub</a>
                        </li>
                    </ul>
                </div>
            </body>
        </div>
    );
}

export default App;
