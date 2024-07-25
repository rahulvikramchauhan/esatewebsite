import { useContext, useEffect, useState } from "react";
import "./navbar.scss"
import { Link, useNavigate } from "react-router-dom";
import { userData } from "../PropertyList/dummydata";
import { UserContext } from "../Context/Context";
import Profile from "../Profile/Profile";

const Navbar = function () {
    const [sideMenu, setSideMenu] = useState(true)
    const { currentUser, updateUser } = useContext(UserContext);

    console.log(currentUser)

    function handleProfile() {
        // Navigate("/profile")

    }
    const handleClick = function () {
        return setSideMenu(!sideMenu);
    }




    return (
        <nav>
            <div className="left">
                <a href="/#" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span href="" className="WebName">RahulEsatae</span>
                </a>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contacts</Link>
                <Link to="/agents">Agents</Link>
            </div>
            {currentUser ? (<div className="navProfile">
                <div className="wrapper">
                    <div className="userInfo">
                        <img src={currentUser.avatar || "/noavatar.jpg"} />
                        <b >
                            {currentUser.name}
                        </b>

                    </div>
                    <div className="profileNotification">
                        <Link to="/profile"><button onClick={handleProfile}>
                            Profile
                        </button></Link>

                        <div className="notification">
                            3
                        </div>
                    </div>

                </div>
            </div>) : (<div className="right">
                <Link to="/login"> Sign In</Link>
                <Link to="/register" className="signUp"> Sign Up</Link>
            </div>)}
            <img src="/menu.png" className="hamMenu" alt="hamMenu" onClick={handleClick} />
            <div className={sideMenu ? "hamSideMenu" : "hamSideMenu visible"}   >


                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contacts</Link>
                <Link to="/">Agents</Link>

                {!currentUser ? <div className="signInSignOut">
                    <Link to="/login" >Sign In</Link>
                    <Link to="/register"> Sign Up</Link>
                </div> : <Link to="/login" onClick={function () {
                    updateUser(null)
                }}>Log Out</Link>}
            </div>

            {/* <div className="menu">
                






            </div> */}


        </nav>
    )
}
export default Navbar;