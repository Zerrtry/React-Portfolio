import React, { useState, useContext } from 'react';
import { lngEN, lngRU } from '../constants'

const LngContext = React.createContext(
);

const LngContextTggl = React.createContext(
);

export function useLanguage () {
    return useContext(LngContext)
}

export function useLanguageTggl () {
    return useContext(LngContextTggl)
}

export function LngProvider ({ children }) {
    
    const [ activeLanguage, setActiveLanguage ] = useState (lngEN)

    const toggleLanguage = (e) => {
        const lng = e.target.dataset.txt
        lng==="EN"?setActiveLanguage(lngEN)
        :setActiveLanguage(lngRU)
    }
    return (
        <LngContext.Provider value={activeLanguage}>
            <LngContextTggl.Provider value={toggleLanguage}>
                { children }
             </LngContextTggl.Provider>
        </LngContext.Provider>
    )
}