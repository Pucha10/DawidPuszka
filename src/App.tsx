import Navbar from "./components/elements/Navbar";
import "./App.css";
import useDictionary from "./useDictionary";
import CookieConsent from "react-cookie-consent";
function App() {
    const d = useDictionary();
    return (
        <div>
            <Navbar />
            <body>
                <div className="container">
                    <div className="left-column">
                        <h1>{d("HelloText")}</h1>
                        <h1>
                            {d("StartingName")}{" "}
                            <span className="name">Dawid Puszka</span>
                        </h1>
                        <h2>{d("Desc")}</h2>
                        <div className="social-media">
                            <a href="https://github.com/Pucha10">
                                <img src="/images/GitHub.png" alt="GitHub" />
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
                    </div>
                    <div className="right-column">
                        <img
                            className="MainPage"
                            src="/images/me.png"
                            alt="Me"
                        />
                    </div>
                </div>
                <CookieConsent
                    debug={true}
                    location="bottom"
                    style={{
                        background: "black",
                        textAlign: "center",
                        fontSize: "24px",
                    }}
                    buttonStyle={{
                        color: "black",
                        fontSize: "24px",
                    }}
                >
                    {d("cookie")}
                </CookieConsent>
            </body>
        </div>
    );
}

export default App;
