
import './App.scss';
import './fullscreen.scss';
import Navbar from './Navbar/Navbar';

import { Navigate, Outlet } from 'react-router-dom';
import { singlePostData } from './PropertyList/dummydata';
import { useEffect, useState } from 'react';
import { Context, UserContext } from './Context/Context';

export function App() {
  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // to show change in Nav Info
  const updateUser = (user) => {

    setCurrentUser(user);
  };
  useEffect(function () {
    setCurrentUser(JSON.parse(localStorage.getItem("User")) || null)
  }, [])
  console.log(currentUser)


  function hideFullScreen() {
    console.log("hidefull screen")
    setShow(function (prevShow) {
      return !prevShow;
    })
  }

  return (

    <Context.Provider value={{ show, setShow, imgIndex, setImgIndex }}>
      <UserContext.Provider value={{ currentUser, updateUser }}>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
        <div className={show ? "fullscreen-overlay active" : "fullscreen-overlay"} >
          <p onClick={hideFullScreen}>X</p>
          <img src={singlePostData.images[imgIndex]} alt="Fullscreen " />
        </div>
      </UserContext.Provider>
    </Context.Provider>



  );
}
export function RequirAuthApp() {
  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(null);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("User")) || null);

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  // to show change in Nav Info
  const updateUser = (user) => {

    setCurrentUser(user);
  };

  console.log(currentUser)


  function hideFullScreen() {
    console.log("hidefull screen")
    setShow(function (prevShow) {
      return !prevShow;
    })
  }

  return (

    <Context.Provider value={{ show, setShow, imgIndex, setImgIndex }}>
      <UserContext.Provider value={{ currentUser, updateUser }}>
        <div className="App">
          <div>
            <Navbar />
          </div>
          <div className='content'>
            <Outlet />
          </div>
        </div>
        <div className={show ? "fullscreen-overlay active" : "fullscreen-overlay"} >
          <p onClick={hideFullScreen}>X</p>
          <img src={singlePostData.images[imgIndex]} alt="Fullscreen " />
        </div>
      </UserContext.Provider>
    </Context.Provider>



  );
}

;
