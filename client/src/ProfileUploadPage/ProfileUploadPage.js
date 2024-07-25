import { Link, useNavigate } from "react-router-dom";
import "./profileuploadPage.scss";
import { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import axios from "axios";
import UploadWidget from "../UploadWidget/uploadWidget";
function ProfileUploadPage() {
    const { currentUser, updateUser } = useContext(UserContext)
    const [avatar, setAvatar] = useState("");
    const Navigate = useNavigate();
    console.log(avatar)

    async function handleUpdate(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("userName");
        const email = formData.get("Email");
        const password = formData.get("Password");

        try {
            const updatedData = await axios.put(`http://localhost:8000/api/users/${currentUser._id}`, {
                name, email, password, avatar: avatar[0]

            }, {
                withCredentials: true
            })
            updateUser(updatedData.data.data)

            Navigate("/profile")
            console.log(updatedData.data.data)
        } catch (error) {
            console.log(error)
        }



    }
    return (
        <div className="profileUpdatePage">
            <div className="formContainer">
                <form onSubmit={handleUpdate}>
                    <h1>
                        Update Profile
                    </h1>
                    <input type="text" name="userName" placeholder="userName" defaultValue={currentUser.name} />
                    <input type="text" name="Email" placeholder="Email" defaultValue={currentUser.email} />
                    <input type="password" name="Password" placeholder="Password" />
                    {/* {!accExist ? <p className="accExist">*Email Exist</p> : ""} */}
                    <button> Update</button>
                    <Link to="/login"> Do you have Account?</Link>
                </form>

            </div>
            <div className="imgContainer">
                <img src={avatar[0] || "/noavatar.jpg"} />
                <UploadWidget uwConfig={{
                    cloudName: "dlhyi5sex", uploadPreset: "Estate_test",
                }} setState={setAvatar} />
            </div>

        </div>
    )
}
export default ProfileUploadPage;