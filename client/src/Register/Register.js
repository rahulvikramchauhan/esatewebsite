import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

import "./register.scss";
import { useState } from "react";
function Register() {
    const navigate = useNavigate();
    const [accExist, setAccExist] = useState(true)
    async function handleRegister(e) {
        try {
            e.preventDefault();
            const formData = new FormData(e.target)
            const name = formData.get("userName");
            const email = formData.get("Email");
            const password = formData.get("Password");
            const data = await axios.post("http://localhost:8000/api/auth/register", {

                name,
                email,
                password

            });
            console.log(data.data);
            navigate("/login");
        } catch (error) {
            if (error.response.data.errorCode === 11000) {
                setAccExist(false)
            }
            // console.log(error.response.data.errorCode);
        }



    }
    return (
        <div className="register">
            <div className="formContainer">
                <form onSubmit={handleRegister}>
                    <h1>
                        Create Account
                    </h1>
                    <input type="text" name="userName" placeholder="userName" />
                    <input type="text" name="Email" placeholder="Email" />
                    <input type="text" name="Password" placeholder="Password" />
                    {!accExist ? <p className="accExist">*Email Exist</p> : ""}
                    <button> Register</button>
                    <Link to="/login"> Do you have Account?</Link>
                </form>

            </div>
            <div className="imgContainer">
                <img src="/bg.png" />
            </div>

        </div>
    )
}
export default Register;