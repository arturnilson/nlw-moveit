import { createContext, ReactNode } from "react";

interface ExampleContextData { // tipagem

}

interface ExampleProviderProps {
    children: ReactNode; //quando a tipagem do elemento filho for um componente react
}

const ExampleContext = createContext({} as ExampleContextData);

export function ExampleProvider({ children }: ExampleProviderProps) {
    return (
        <ExampleContext.Provider value={{}}>
            {children}
        </ExampleContext.Provider>
    );
}