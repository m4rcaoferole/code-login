import { createContext, useEffect, useState } from "react";
import { IAuhtProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext); // enteder que o obj não sej do formato

export const AuthProvider = ({ children }: IAuhtProvider) => { // Controlador do estado
   const [ user, setUser ] = useState<IUser | null>()

   useEffect(() => {
      const user = getUserLocalStorage()

      if(user) setUser(user)
   }, [])

   async function authenticate(email: string, password:string) {
      const response = await LoginRequest(email, password);
      const payload = { token: response.token, email } // User autenticado

      setUser(payload)
      setUserLocalStorage(payload)
   }

   function logout() {
      setUser(null)
      setUserLocalStorage(null)
   }

   return (
      <AuthContext.Provider value={{ ...user, authenticate, logout }}>
         {children}
      </AuthContext.Provider>
   )
}