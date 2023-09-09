import { useState,createContext } from "react";

const ModeContext = createContext()

const ModeProvider = ({children})=>{

    const [dayMode, setDayMode] = useState(undefined)

    return (
        <ModeContext.Provider value={{dayMode,setDayMode}}>
            {children}
        </ModeContext.Provider>
    )

}

export {ModeContext, ModeProvider}