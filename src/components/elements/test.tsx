import useDictionary from "../../useDictionary";
import useLocalStorage from "use-local-storage";

function Language() {
    const [language, setLanguage] = useLocalStorage("language", "en");
    const d = useDictionary();
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setLanguage("en")}
            >
                {d("button-eng")}
            </button>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => setLanguage("pl")}
            >
                {d("button-pl")}
            </button>
        </div>
    );
}

export default Language;
