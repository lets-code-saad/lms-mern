import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.js';
import AllCourses from './Components/Main/CoursesSection/AllCourses/AllCourses.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="/all-courses" element={<AllCourses/>}/>
</Routes>
</BrowserRouter>

)

