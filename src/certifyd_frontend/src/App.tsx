// import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/SignupLoginPage/LoginPage';
import SignupPage from './pages/SignupLoginPage/SignupPage';
import HomePage from './pages/HomePage/homePage';
import StudentPage from './pages/StudentPage.tsx/StudentPage';
import UniversitiesPage from './pages/UniversityPage/UniversityPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import AuthenticationPage from './pages/AuthPage/AuthentificationPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import InformationPage from './pages/InformationPage/InformationPage';

import PageLayout from './layout/pageLayout';

//  Handle login/register using Firebase 
// import { initializeApp } from "firebase/app";

// // Votre configuration Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyCHxp8zCuaOSskCuMmUphku2NAOfF5XKTE",
//   authDomain: "contractor-8e686.firebaseapp.com",
//   projectId: "contractor-8e686",
//   storageBucket: "contractor-8e686.appspot.com",
//   messagingSenderId: "421509078183",
//   appId: "1:421509078183:web:44c44437dbcc33c81d4f82"
// };

// // Initialise Firebase avec votre configuration
// const app = initializeApp(firebaseConfig);
const ownerId = '009';

function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<PageLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/' element={<HomePage />}/>
          <Route path='/student' element={<StudentPage />}/>
          <Route path='/university' element={<UniversitiesPage />}/>
          <Route path='/auth/:id' element={<AuthenticationPage />} />
          <Route path='/info' element={<InformationPage />} />
          <Route path='/student/:id' element={<DashboardPage ownerId={ ownerId } />}/>
          <Route path='*' element= {<NotFoundPage />} />
          </Route>
    )
  )
  return <RouterProvider router={router} />;
}

export default App;