import { createContext } from "react";

//  setup our blank stor------
const MyStore = createContext();//This will create an object which is MyStore = {currentValue:Undefined,Provider:ReactComponent,Consumer:ReactComponent}

//Make a provider of our store who handle the data and
//serves to the customer

export const ContextProvider = ({children}) => {
  return <MyStore.Provider>    //this line will call Provider() as it is react component 
    {children}
  </MyStore.Provider>;
};


//I create the above component because it return jsx and also hook can only be called inside component.