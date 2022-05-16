import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useAuth } from "./context/AuthProvider/useAuth";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

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
         <Route path="/" element={<Private><Home /></Private>} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
   </Router>     
  )
}