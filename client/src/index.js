import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App, RequirAuthApp } from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './HomePage/Home';
import List from './PropertyList/List';
import SinglePage from './SinglePage/SinglePage';
import Profile from './Profile/Profile';
import Register from './Register/Register';
import Login from './Login/Login';
import ProfileUploadPage from './ProfileUploadPage/ProfileUploadPage';
import NewPostPage from './NewPostPage/NewPostPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: "/",
      element: <Home />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/:id",
      element: <SinglePage />
    },
    {
      path: "/list",
      element: <List />
    },



    {
      path: "/about",
      element: <Home />
    },


    {
      path: "/contact",
      element: <Home />
    }, {
      path: "/agents",
      element: <Home />
    }]
  }
  ,
  {
    path: "/",
    element: <RequirAuthApp />,
    children: [
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/profile/update",
        element: <ProfileUploadPage />
      },
      {
        path: "/newPost",
        element: <NewPostPage />
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
