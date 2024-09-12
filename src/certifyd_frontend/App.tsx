import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './hiddenPages/SignupLoginPage/LoginPage';
import SignupPage from './hiddenPages/SignupLoginPage/SignupPage';
import HomePage from './hiddenPages/HomePage/homePage';
import StudentPage from './hiddenPages/StudentPage.tsx/StudentPage';
import UniversitiesPage from './hiddenPages/UniversityPage/UniversityPage';
import DashboardPage from './hiddenPages/DashboardPage/DashboardPage';
import AuthenticationPage from './hiddenPages/AuthPage/AuthentificationPage';

import { initializeApp } from "firebase/app";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCHxp8zCuaOSskCuMmUphku2NAOfF5XKTE",
  authDomain: "contractor-8e686.firebaseapp.com",
  projectId: "contractor-8e686",
  storageBucket: "contractor-8e686.appspot.com",
  messagingSenderId: "421509078183",
  appId: "1:421509078183:web:44c44437dbcc33c81d4f82"
};

// Initialise Firebase avec votre configuration
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage firebaseApp={app} />} />
        <Route path='/signup' element={<SignupPage firebaseApp={app} />} />
        <Route path='/' element={<HomePage />}/>
        <Route path='/student' element={<StudentPage />}/>
        <Route path='/university' element={<UniversitiesPage />}/>
        <Route path='/auth' element={<AuthenticationPage />} />
        {/* <Route path='/student/{id}' element={<DashboardPage />}/> */}
      </Routes>
    </Router>
  )
}

export default App;