import "./list.scss";
import Filter from "../FilterList/Filter";
import { listData } from "./dummydata";
import Card from "../Card/Card";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function List() {
    const [postList, setPostList] = useState([]);
    useEffect(function () {
        async function allPost() {
            const allpost = await fetch("http://localhost:8000/api/post");
            const post = await allpost.json();
            console.log(post)
            setPostList(post.data)
        }
        allPost();
    }, [])
    return (
        <div className="List">
            <div className="listContainer">
                <div className="search">
                    <h1>Search Result for</h1>
                    <h2>London</h2>
                </div>
                <Filter />
                <div className="listCard">
                    {postList?.map(function (el) {
                        // console.log(el);
                        return <Link to={`/${el._id}`}><Card key={el._id} item={el} /></Link>
                    })}

                </div>
            </div>
            <div className="mapContainer">
                <Map position={postList} />
            </div>
        </div>
    )
}
export default List