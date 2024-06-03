import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home.jsx'
import NotFound from './Components/NotFound.jsx'
import Login from './Components/Login.jsx'
import RegisterPage from './Components/RegisterPage.jsx'
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx'
import JoinAsEmployee from './Pages/JoinAsEmployee.jsx'
import JoinAsAdmin from './Pages/JoinAsAdmin.jsx'
import AssetList from './Pages/AssetList.jsx'
import AddAnAsset from './Pages/AddAnAsset.jsx'
import AllRequests from './Pages/AllRequests.jsx'
import CustomRequestsList from './Pages/CustomRequestsList.jsx'
import MyEmployees from './Pages/MyEmployees.jsx'
import AddEmployee from './Pages/AddEmployee.jsx'
import Profile from './Pages/Profile.jsx'
import MyAssets from './Pages/MyAssets.jsx'
import MyTeam from './Pages/MyTeam.jsx'
import RequestForAsset from './Pages/RequestForAsset.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: '/joinasemployee',
        element: <JoinAsEmployee/>
      },
      {
        path: '/joinasadmin',
        element: <JoinAsAdmin/>
      },
      {
        path: "/assetlist",
        element: <AssetList/>
      },
      {
        path: "/addasset",
        element: <AddAnAsset/>
      },
      {
        path: "/allrequests",
        element: <AllRequests/>
      },
      {
        path: "/customrequestslist",
        element: <CustomRequestsList/>
      },
      {
        path: "/myemployees",
        element: <MyEmployees/>
      },
      {
        path: "/addemployee",
        element: <AddEmployee/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/myassets",
        element: <MyAssets/>
      },
      {
        path: "/myteam",
        element: <MyTeam/>
      },
      {
        path: "/requestforasset",
        element: <RequestForAsset/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router}/>
    </FirebaseProvider>
  </React.StrictMode>
)
