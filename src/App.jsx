import './App.css'
import React from 'react';
import UpComing from './UpComing';
import OnGoing from './OnGoing';
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import AppLayout from './AppLayout';

const router = createBrowserRouter([

  {

    path : "/",
    element : <AppLayout/>,
    children : [
  
    {
  
      path : "Upcoming",
      element : <UpComing/>,
      
    },
  
    {
  
      path : "Ongoing",
      element : <OnGoing/>,
      
    }]

  }
 
]);

function App() {

  return <RouterProvider router = {router}></RouterProvider>

}

export default App;


