import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './componets/About/About.jsx'
import Contact from './componets/Contact/Contact.jsx'
import Home from './componets/Home/Home.jsx'
import User from './componets/user/User.jsx'
import Github, { gitHubInfoLoader } from './componets/Github/Github.jsx'



const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User />} />
      <Route 
          path='/github'
          element={<Github/>}
          loader={gitHubInfoLoader}
       />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
