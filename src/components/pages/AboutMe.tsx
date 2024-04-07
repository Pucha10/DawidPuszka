import Navbar from "../elements/Navbar";
import "./Pages.css";

function App() {
    return (
        <div>
            <Navbar />
            <body>
                <div className="container">
                    <div className="text-column">
                        <p className="AboutMeText">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                    <div className="photo-column">
                        <img src="/images/example1.png" alt="Me" />
                        <img src="/images/example2.png" alt="Me" />
                    </div>
                </div>
            </body>
        </div>
    );
}

export default App;
