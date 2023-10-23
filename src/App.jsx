import React,{useEffect} from "react";
import "./App.css"
import Home from "./pages/home/Home";
import axios from "axios";
import SignInPage from "./pages/SignIn/SignInPage";
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom'
import { useUserContext } from "./hooks/useUserContext";

function App() {

  const {user, setUser} = useUserContext();

  useEffect(() => {
    axios.get("https://uol-socia-media-130e4e1229f5.herokuapp.com/auth/login/success", { withCredentials: true }).then((res) => {
        console.log(res);
        if (res.data) {
          setUser(res.data.user);
        }
    })
    .catch((error) => {
      console.error("Axios Request Error:", error);
  });
}, [])
  
  // fetch user here of user context 
  return (
    <Router>  
      <Routes>
      <Route path="/"  element={user ? <Home />: <Navigate to='/signin' />} />
      <Route path="/signin"  element={!user ? <SignInPage />: <Navigate to='/' />} />
      </Routes>
    </Router>
  );
}

export default App;