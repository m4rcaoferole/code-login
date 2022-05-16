import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthProvider/useAuth";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
   const Private = ({ children }: { children: JSX.Element }) => {
      const auth = useAuth();

      if(!auth.email) return <Navigate to='/login' />;

      return children;
   }

  return (
   <Router>
    <AuthProvider>
      <Routes>
         <Route path="/" element={<Private><p>Home Page</p></Private>} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
   </Router>     
  )
}