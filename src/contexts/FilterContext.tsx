import { createContext, ReactNode, useState } from "react";

interface FilterContextData{
    desc: string,
    loc: string,
    changeDesc,
    changeLoc
}

interface FilterProviderData{
    children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({children}: FilterProviderData){
    const [desc, setDesc] = useState("");
    const [loc, setLoc] = useState("");

    function changeDesc(param:string){
        setDesc(param);
    }
    function changeLoc(param:string){
        setLoc(param);
    }

    return( 
        <FilterContext.Provider value={{
            desc,
            loc,
            changeDesc,
            changeLoc
        }}>
            {children}
        </FilterContext.Provider>
    )
}