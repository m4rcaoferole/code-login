import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"

export const Home = () => {
   const { logout } = useContext(AuthContext)

   const handleLogout = () => {
      logout();
   }

   return (
      <div>
         <h1>Home page</h1>

         <div>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate illo blanditiis amet quaerat? Fugiat eveniet, velit inventore quibusdam molestias dolore adipisci distinctio. Harum officiis iusto tempora eveniet asperiores dolorum est.
            </p>
         </div>

         <button onClick={handleLogout}>
            LOGOUT
         </button>
      </div>
   )
}