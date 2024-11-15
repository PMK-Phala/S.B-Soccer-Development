import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Header from './Components/Header.jsx';
import Training from './Pages/Training.jsx';
import Contact from './Pages/Contact.jsx';
import JoinPage from './Pages/JoinPage.jsx';
import Join from './Components/Join.jsx';
import Qoute from './Components/Quote.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:"/Training",
    element:<Training/>
  },
  {
    path:'/Contact',
    element:<Contact/>
  },
  {
    path:'/Join',
    element:<JoinPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
