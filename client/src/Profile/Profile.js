import "./profile.scss";
import { userData, listData } from "../PropertyList/dummydata";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { UserContext } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const [veiw, setVeiw] = useState(true)
    const Navigte = useNavigate();
    const { currentUser, updateUser } = useContext(UserContext);
    const [post, setPost] = useState();

    console.log("entered into profile")
    useEffect(function () {
        async function fetchPost() {
            const data = await axios.put(`http://localhost:8000/api/post/profile/${currentUser?._id}`,{},{
                withCredentials:true
            })
            // const jsondata = await data.json()
            console.log( "fetchdata"+data);
            setPost(data.data);
        }
        fetchPost();
    }, []);
    console.log(post)

    //HANDLE LOGOUT
    async function handleLogout() {
        const data = await axios.post('http://localhost:8000/api/auth/logout', {}, {
            withCredentials: true
        });
        console.log(data);
        localStorage.clear();
        updateUser(null)


    }
    return (
        <div className="profile">
            <div className="userContainer">
                <div className="wrapper">
                    <div className="title">
                        <h1>
                            User Information
                        </h1>
                        <Link to="/profile/update" ><button className="update">
                            update Profile
                        </button></Link>

                    </div>
                    <div className="info">
                        <div className="avatar">
                            <p>Avatar :</p>
                            <img src={currentUser.avatar || "/noavatar.jpg"} />

                        </div>
                        <div className="name">
                            <p>UserName :</p>
                            <b>{currentUser?.name}</b>

                        </div>
                        <div className="email">
                            <p>Email :</p>
                            <b>{currentUser?.email}</b>

                        </div>
                        <button onClick={handleLogout}>
                            LogOut
                        </button>


                    </div>
                    <div className="myList">
                        <div className="title">
                            <h1>
                                MyList
                            </h1>
                            <Link to="/newPost"><button className="update">
                                Add New Post
                            </button></Link>
                        </div>
                        <div className="listItem">
                            {post?.data?.map(function (el) {
                                // console.log(el);
                                return <Link to={`/${el._id}`}><Card key={el._id} item={el} /></Link>
                            })}
                        </div>

                    </div>
                    <div className="savedList">
                        <h1>
                            Saved List
                        </h1>
                        <div className="savedItem">
                            {listData.map(function (el) {
                                // console.log(el);
                                return <Card key={el.id} item={el} />
                            })}
                        </div>

                    </div>
                </div>


            </div>
            <div className="messageContainer">
                <div className="veiw" onClick={function () {

                    setVeiw(!veiw)
                }}>
                    <h1>Messages</h1>
                    <div className="messages">
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>
                        <div className="message">
                            <img src={userData.img} alt="img" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do....</p>
                        </div>

                    </div>

                </div>
                <div className={veiw ? "chatBox showChat" : "chatBox"}>
                    <div className="top">
                        <div className="user">
                            <img src={userData.img} />
                            <b>John Doe</b>
                        </div>
                        <b onClick={function () {

                            setVeiw(!veiw)
                        }}>X</b>
                    </div>
                    <div className="center">
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                        <div className="own">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <span>1hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        bottom
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Profile;

