import { useContext, useState } from "react";
import "./newPostPage.scss";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import UploadWidget from "../UploadWidget/uploadWidget";
import axios from "axios";
import { UserContext } from "../Context/Context";
function NewPostPage() {
    const [content, setContent] = useState();
    const [uploadImages, setUploadImages] = useState([])
    const { currentUser } = useContext(UserContext)
    console.log(currentUser.avatar)
    console.log(uploadImages)
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const inputs = Object.fromEntries(formData);
        console.log(inputs)
        const postData = await axios.put("http://localhost:8000/api/post", {
            postDetail: {
                Description: content,
                utilities: inputs.utilities,
                pet: inputs.pet,
                income: inputs.income,
                size: inputs.size,
                school: inputs.school,
                bus: inputs.bus,
                restaurant: inputs.resturant,
            },
            post: {
                title: inputs.title,
                price: parseInt(inputs.price),
                images: uploadImages,
                address: inputs.address,
                city: inputs.city,
                bedroom: parseInt(inputs.bedroom),
                bathroom: parseInt(inputs.bathroom),
                latitude: inputs.latitude,
                longitude: inputs.longitude,
                type: inputs.type,
                property: inputs.property,

            }

        }, { withCredentials: true })
        console.log("submit called")
        console.log(postData)
    }



    return (
        <div className="newPostPage">

            <form className="postTextContainer" onSubmit={handleSubmit}>
                <h1>Add New Post</h1>
                <div className="item">
                    <div className="title">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" />
                    </div>
                    <div className="price">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" />

                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" />
                    </div>

                </div>
                <div className="desc">
                    <ReactQuill theme="snow" onChange={function (data) {
                        setContent(data)
                    }} value={content} />

                </div>
                <div className="item">
                    <div className="city">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" />
                    </div>
                    <div className="bedroom">
                        <label htmlFor="bedroom">Bedroom Number</label>
                        <input type="text" className="bedroom" name="bedroom" />

                    </div>
                    <div className="bathroom">
                        <label htmlFor="bathroom">Bathroom Number</label>
                        <input type="text" name="bathroom" />
                    </div>
                </div>
                <div className="item">
                    <div className="latitude">
                        <label htmlFor="latitude">Latitude</label>
                        <input type="text" Name="latitude" />
                    </div>
                    <div className="longitude">
                        <label htmlFor="longitude">Longitude</label>
                        <input type="text" name="longitude" />

                    </div>
                    <div className="type">
                        <label htmlFor="type">Type</label>
                        <select name="type">
                            <option value="Buy">Buy</option>
                            <option value="Rent">Rent</option>

                        </select>


                    </div>
                </div>
                <div className="item">
                    <div className="propeerty">
                        <label htmlFor="property">Property</label>
                        <select name="property">
                            <option value="apartment">Apartment</option>
                            <option value="house">House</option>
                            <option value="condo">Condo</option>
                            <option value="land">Land</option>
                        </select>
                    </div>
                    <div className="utilities">
                        <label htmlFor="utilities">Utilities Policy</label>
                        <select name="utilities">
                            <option value="owner">Owner is responsible</option>
                            <option value="tenant">Tenant is responsible</option>
                            <option value="shared">Shared</option>

                        </select>

                    </div>
                    <div className="pet">
                        <label htmlFor="pet">Pet Policy</label>
                        <select name="pet">
                            <option value="owner">allowed</option>
                            <option value="tenent">not allowed</option>
                        </select>
                    </div>
                </div>
                <div className="item">
                    <div className="income">
                        <label htmlFor="title">Income</label>
                        <input type="text" name="income" />
                    </div>
                    <div className="size">
                        <label htmlFor="title">Size</label>
                        <input type="text" name="size" />

                    </div>
                    <div className="school">
                        <label htmlFor="title">School</label>
                        <input type="text" name="school" />
                    </div>
                </div>
                <div className="item">
                    <div className="bus">
                        <label htmlFor="title">Bus</label>
                        <input type="text" name="bus" />
                    </div>
                    <div className="resturant">
                        <label htmlFor="title">Resturant</label>
                        <input type="text" name="resturant" />

                    </div>

                </div>
                <button className="addPost" >Add post</button>
            </form>
            <div className="postImageContainer">
                <div>
                    {uploadImages.length > 0 ? uploadImages.map(function (el) {
                        return <img src={el || currentUser.avatar} />
                    }) : <img src={currentUser.avatar} />}</div>
                <UploadWidget uwConfig={{
                    cloudName: "dlhyi5sex", uploadPreset: "Estate_test", multiple: true
                }} setState={setUploadImages} />

            </div>
        </div>
    )
}
export default NewPostPage;