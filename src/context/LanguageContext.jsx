import { createContext, useState } from "react"
import { aboutData1 } from "../constants/data1";

const LanguageContext = createContext()
const initialLanguage = 'es';

const LanguageProvider = ({children})=>{
    const [language,setLanguage]=useState(initialLanguage);
    const [texts,setTexts]=useState(aboutData1[language]);
    const handleLanguage =(e)=>{
        if(e.target.value==='es'){
            setLanguage('es');
            setTexts(aboutData1.es);}
        else{
            setLanguage('en');
            setTexts(aboutData1.en);
        }        
    };
    const data={texts,handleLanguage}

return(
    <ThemeContextProvider value={data}>
        {children}
    </ThemeContextProvider>
    );
};

export  {LanguageProvider};
export default LanguageContext;
