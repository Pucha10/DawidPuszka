import useLocalStorage from "use-local-storage";
export default function useDictionary()
{
    const [language] = useLocalStorage("language","en");
    return (id: string) => getTranslation(id,language);  
}
function getTranslation(id :string, len:string) : string
{
    if(id=="button-eng" && len=="en")
        {
            return "English";
        }
    if(id=="button-eng" && len=="pl")
        {
            return "Angielski";
        }
    if(id=="button-pl" && len=="en")
        {
            return "Polish";
        }
    if(id=="button-pl" && len=="pl")
        {
            return "Polski";
        }
    if(id=="tel" && len=="pl")
        {
            return "Telefon";
        }
    if(id=="tel" && len=="en")
        {
            return "Phone Number";
        }
    if(id=="projekt" && len=="en")
        {
            return "Project";
        }
    if(id=="projekt" && len=="pl")
        {
            return "Projekt";
        }
    if(id=="platformowa" && len=="pl")
        {
            return "Gra platformowa";
        }
    if(id=="platformowa" && len=="en")
        {
            return "Platform game";
        }
    if(id=="karciana" && len=="pl")
        {
            return "Wieloosoboowa gra karciana";
        }
    if(id=="karciana" && len=="en")
        {
            return "Multiplayer card game";
        }
    if(id=="HelloText" && len=="pl")
        {
            return "Cześć!";
        } 
    if(id=="HelloText" && len=="en")
        {
            return "Hi There!";
        }
    if(id=="StartingName" && len=="en")
        {
            return "I'm";
        }
    if(id=="StartingName" && len=="pl")
        {
            return "Jestem";
        }
    if(id=="Desc" && len=="en")
        {
            return "Programmer | Game Enthusiast";
        }
    if(id=="Desc" && len=="pl")
        {
            return "Programista | Zapalony gracz";
        }
    if(id=="AboutMeText" && len=="en")
        {
            return "Hi, my name is Dawid and I am 22 years old. I am a beginner C# developer. I like new technology and games. I even create some of them myself. I am open to internships, traineeships, and projects that will allow me to develop as a future IT specialist."
        }
    if(id=="AboutMeText" && len=="pl")
        {
            return "Cześć jestem Dawid i mam 22 lata. Jestem początkującym C# deweloperem. Lubie nowe technologię i gry. Tworzę również własne gry. Jestem otwarty na propozycje współpracy które pomogą mi w mojej przyszłej karierze dewelopera";
        }
    if(id=="AboutMeHeader" && len=="en")
        {
            return "About Me"
        }
    if(id=="AboutMeHeader" && len=="pl")
        {
            return "O mnie";
        }
    if(id=="EducationHeader" && len=="en")
        {
            return "Education"
        }
    if(id=="EducationHeader" && len=="pl")
        {
            return "Edukacja";
        }
    if(id=="ExpierienceHeader" && len=="en")
        {
            return "Experience"
        }
    if(id=="ExpierienceHeader" && len=="pl")
        {
            return "Doświadczenie";
        }
    if(id=="SkillsHeader" && len=="en")
        {
            return "Skills"
        }
    if(id=="SkillsHeader" && len=="pl")
        {
            return "Umiejętności";
        }
    if(id=="presentPeriod" && len=="en")
        {
            return "Present"
        }
    if(id=="presentPeriod" && len=="pl")
        {
            return "do teraz";
        }
    if(id=="SGGW" && len=="en")
        {
            return "Warsaw University of Life Sciences"
        }
    if(id=="SGGW" && len=="pl")
        {
            return "Szkoła Główna Gospodarstwa Wiejskiego w Warszawie";
        }
    if(id=="HighSchool" && len=="en")
        {
            return "High School number 3 in Radom named after Dionizy Czachowski in Radom"
        }
    if(id=="HighSchool" && len=="pl")
        {
            return "Liceum Ogólnokształcące nr 3 im. Diozinego Czachowskiego w Radomiu";
        }
    if(id=="Atinea" && len=="en")
        {
            return "C# junior developer in Atinea"
        }
    if(id=="Atinea" && len=="pl")
        {
            return "C# junior developer w Atinea";
        }
    if(id=="Zazumi" && len=="en")
        {
            return "Mathematics and computer science teacher in Zazumi"
        }
    if(id=="Zazumi" && len=="pl")
        {
        return "Nauczyciel matematyki i informatyki w Zazumi";
        }
    if(id=="Home" && len=="en")
        {
            return "Home"
        }
    if(id=="Home" && len=="pl")
        {
            return "Strona Główna";
        }
    if(id=="About" && len=="en")
        {
            return "About"
        }
    if(id=="About" && len=="pl")
        {
            return "O mnie";
        }
    if(id=="Contact" && len=="en")
        {
            return "Contats"
        }
    if(id=="Contact" && len=="pl")
        {
            return "Kontakt";
        }
    if(id=="Project" && len=="en")
        {
            return "Projects"
        }
    if(id=="Project" && len=="pl")
        {
            return "Projekty";
        }
    if(id=="cookie" && len=="en")
        {
            return "This site uses Cookie"
        }
    if(id=="cookie" && len=="pl")
        {
            return "Ta strona używa Cookie";
        }                                                                           
    return "";
}




