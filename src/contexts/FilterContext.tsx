import { createContext, ReactNode, useState } from "react";

interface FilterContextData{
    desc: string,
    loc: string,
    isChecked: boolean,
    changeDesc,
    changeLoc,
    changeIsChecked
}

interface FilterProviderData{
    children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({children}: FilterProviderData){
    const [desc, setDesc] = useState("");
    const [loc, setLoc] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    function changeDesc(param:string){
        setDesc(param);
    }
    function changeLoc(param:string){
        setLoc(param);
    }
    function changeIsChecked(param:boolean){
        setIsChecked(param);
    }

    return( 
        <FilterContext.Provider value={{
            desc,
            loc,
            isChecked,
            changeDesc,
            changeLoc,
            changeIsChecked
        }}>
            {children}
        </FilterContext.Provider>
    )
}