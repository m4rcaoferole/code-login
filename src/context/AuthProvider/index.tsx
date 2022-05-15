import { createContext, useState } from "react";
import { IAuhtProvider, IContext, IUser } from "./types";
import { LoginRequest } from "./util";

export const AuthContext = createContext<IContext>({} as IContext); // enteder que o obj não sej do formato

export const AuthProvider = ({ children }: IAuhtProvider) => { // Controlador do estado
   const [ user, setUser ] = useState<IUser | null>()

   async function authenticate({ email, password }: IUser) {
      const response = await LoginRequest({ email, password });
      const payload = { token: response.token, email } // User autenticado

      setUser(payload)
   }

   function logout() {
      setUser(null)
   }

   return (
      <AuthContext.Provider value={{ ...user, authenticate, logout }}>
         {children}
      </AuthContext.Provider>
   )
}