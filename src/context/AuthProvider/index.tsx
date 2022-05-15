import { createContext, useState } from "react";
import { IAuhtProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext); // enteder que o obj não sej do formato

export const AuthProvider = ({ children }: IAuhtProvider) => { // Controlador do estado
   const [ user, setUser ] = useState<IUser | null>()

   async function authenticate() {

   }

   function logout() {
      
   }

   return (
      <AuthContext.Provider value={{ ...user, authenticate, logout }}>
         {children}
      </AuthContext.Provider>
   )
}