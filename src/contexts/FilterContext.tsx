import { createContext, ReactNode } from "react";

interface FilterContextData{

}

interface FilterProviderData{
    children: ReactNode;
}

export const FilterContext = createContext({} as FilterContextData)

export function FilterProvider({children}: FilterProviderData){
    return( 
        <FilterProvider>
            {children}
        </FilterProvider>
    )
}