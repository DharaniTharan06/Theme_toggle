import { createContext , useContext } from "react";

export const Theme = createContext({
    thememode : "dark",
    darktheme: ()=>{},
    lighttheme: ()=>{}
})

export const Themeprovider = Theme.Provider;

export default function useTheme(){
    return useContext(Theme)
} 
