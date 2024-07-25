import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
function Login() {
    const Navigate = useNavigate();
    const [credential, setCredential] = useState(true);
    const { currentUser, updateUser } = useContext(UserContext)
    if (currentUser) {
        Navigate("/")
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const formData = new FormData(event.target);
            const email = formData.get("email");
            const password = formData.get("password");

            const loginData = await axios.post("http://localhost:8000/api/auth/login", {
                email,
                password
            }, {
                withCredentials: true
            })
            console.log(loginData.data.restInfo)

            // USER data stored at local storage
            localStorage.setItem("User", JSON.stringify(loginData.data.restInfo))

            updateUser(loginData.data.restInfo)
            Navigate("/");
        } catch (error) {
            console.log(error)
            if (error?.response?.data?.errorCode === 600) {
                setCredential(false)
            }
        }

    }
    return (
        <div className="login">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <h1>
                        Login
                    </h1>
                    <input type="email" name="email" placeholder="Email" />

                    <input type="password" name="password" placeholder="Password" />
                    {!credential ? <p className="credential">*Invalid Credential</p> : ""}
                    <button> Sign In</button>
                    <Link to="/register"> Create Account</Link>
                </form>

            </div>
            <div className="imgContainer">
                <img src="/bg.png" />
            </div>

        </div>
    )
}
export default Login;