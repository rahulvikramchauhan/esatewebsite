import { Link, useParams } from "react-router-dom";
import "./singlepage.scss";
import { singlePostData, userData } from "../PropertyList/dummydata";
import { Context, UserContext } from "../Context/Context";
import { useContext, useEffect, useState } from "react";
import Map from "../Map/Map"
function SinglePage() {
    const { id } = useParams();
    const [singlePost, setSinglePost] = useState();
    const { show, setShow, imgIndex, setImgIndex } = useContext(Context);
    useEffect(function () {
        async function specificPost() {
            const data = await fetch(`http://localhost:8000/api/post/${id}`);
            const jsonData = await data.json();
            setSinglePost(jsonData.data[0])
        }
        specificPost();
    }, [])
    console.log(singlePost)
    function fullSize(event) {
        setImgIndex(event.target.getAttribute('data-key'))
        setShow(function (prevShow) {
            return !prevShow;
        })


    }
    if (!singlePost) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className="singlePage">

            <div className="propertyDisc">
                <div className="propImgs" >
                    <div className="bigImg">
                        <img key={0} data-key={0} src={singlePost?.images[0] || "/noavatar.jpg"} onClick={fullSize} />{/**we can't access key prop in logic it is only use by react internall purpose */}
                    </div>
                    <div className="smallImg">
                        {singlePost?.images?.slice(1)?.map(function (el, index) {
                            return (
                                <img key={index} data-key={index + 1} src={el} alt="img" onClick={fullSize} />
                            )
                        })}
                    </div>
                </div>
                <div className="info">
                    <div className="propertyInfo">
                        <div className="name"><b>{singlePost?.title}</b></div>
                        <div className="location">
                            <img src="./pin.png" />
                            <span>{singlePost?.data?.address}</span>
                        </div>
                        <div className="price">${singlePost?.price}</div>
                    </div>
                    <div className="userInfo">
                        <Link to="/profile"><img src={singlePost?.user?.avatar || "/noavatar.jpg"} alt="userImg" /></Link>
                        <b>{userData.name}</b>
                    </div>
                </div>
                <div className="desc">
                    <p dangerouslySetInnerHTML={{ __html: singlePost?.postdetail?.Description }} ></p>



                </div>

            </div>
            <div className="propertyFaci">
                <div className="wrapper">
                    <div className="general">
                        <b>
                            General
                        </b>
                        <div className="listVertical">
                            <div className="utilities">
                                <img src="/utility.png" />
                                <div>
                                    <b>Utilities</b>
                                    {singlePost?.postdetail?.utilities === "owner" ? <p>Owner is Responsible</p> : <p>Tenent is Responsible</p>}
                                </div>
                            </div>
                            <div className="pet">
                                <img src="/pet.png" />
                                <div>
                                    <b>Pet Policy</b>
                                    {singlePost?.postdetail?.pet == "owner" ? <p>Pet Allowed</p> : <p>Pet not Allowed</p>}

                                </div>
                            </div>
                            <div className="fee">
                                <img src="fee.png" />
                                <div>
                                    <b>Property Fee</b>
                                    <p>Must 3x income of total household</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sizes">
                        <b>
                            Sizes
                        </b>
                        <div className="listHorizontal">
                            <div className="size">
                                <img src="/size.png" />
                                <div className="info">

                                    <p>80sqft</p>
                                </div>
                            </div>
                            <div className="bed">
                                <img src="/bed.png" />
                                <div className="info">

                                    <p>2 BedRoom</p>
                                </div>
                            </div>
                            <div className="bath">
                                <img src="/bath.png" />
                                <div className="info">

                                    <p>2 Bathroom</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nearBy">
                        <b>Nearby Places</b>
                        <div className="listHorizontal">
                            <div className="school">
                                <img src="/school.png" />
                                <div className="info">
                                    <b>school</b>
                                    <p>250m Away</p>
                                </div>
                            </div>
                            <div className="bus">
                                <img src="/bus.png" />
                                <div className="info">
                                    <b>Bus Stop</b>
                                    <p>100m Away</p>
                                </div>
                            </div>
                            <div className="resturant">
                                <img src="/restaurant.png" />
                                <div className="info">
                                    <b>Restaurant</b>
                                    <p>100m</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="location">

                        <div className="mapLoc">
                            <Map position={[singlePost]} />
                        </div>

                        <div className="enquiry">
                            <div className="chat">
                                <img src="/chat.png" />
                                <p>send Message</p>
                            </div>
                            <div className="save">
                                <img src="/save.png" />
                                <p>Save the Place</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SinglePage;
