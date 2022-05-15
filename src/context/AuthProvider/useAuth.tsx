import { useContext } from "react"
import { AuthContext } from "."

// Facilitador para o uso do Contexto

export const useAuth = () => {
   const context = useContext(AuthContext);

   return context;
}