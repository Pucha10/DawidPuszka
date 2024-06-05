import "./Navbar.css"; // Importuj plik CSS
import { Link } from "react-router-dom";
import Language from "./test";
function Navbar() {
    return (
        <div id="topLabel">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Language/>
        </div>
    );
}

export default Navbar;
