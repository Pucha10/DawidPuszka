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
                    <ul className="contact">
                        <li>Email: example@example.com</li>
                        <li>{d("tel")}: 123-456-789</li>
                        <li>
                            <div className="social-media">
                                <a href="https://github.com/Pucha10">
                                    <img
                                        src="/images/GitHub.png"
                                        alt="GitHub"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/dawid-puszka-a208a7281/">
                                    <img
                                        src="/images/LinkedIn.png"
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a href="https://twitter.com/Dawid1003">
                                    <img src="/images/X.png" alt="X" />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </body>
        </div>
    );
}

export default App;
