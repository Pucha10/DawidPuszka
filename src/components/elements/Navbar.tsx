import "./Navbar.css"; // Importuj plik CSS
import { Link } from "react-router-dom";
import Language from "./test";
import useDictionary from "../../useDictionary";
function Navbar() {
    const d = useDictionary();
    return (
        <div id="topLabel">
            <Link to="/">{d("Home")}</Link>
            <Link to="/AboutMe">{d("About")}</Link>
            <Link to="/Projects">{d("Project")}</Link>
            <Link to="/Contact">{d("Contact")}</Link>
            <Language />
        </div>
    );
}

export default Navbar;
