
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "UI/header/navbar";
import AppRouter from "Components/appRouter";
import { AuthContext } from "Components/context/authContext";


function App() {

  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      if(localStorage.getItem('auth')){
        setIsAuth(true)
      }
      setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
