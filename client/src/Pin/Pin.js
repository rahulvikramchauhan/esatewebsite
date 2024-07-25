import { Link } from "react-router-dom";
import "./pin.scss"
function Pin({ item }) {
    return (
        <div className="pin">
            <div>
                <img src={item?.data?.images[0] || "/noavatar.jpg"} alt="pImg" className="pImg" />
            </div>
            <div className="pinInfo">
                <Link to={`/${item?.data?._id}`} >{item.title}</Link>
                <span>{item?.data?.bedroom} Bedroom</span>
                <b>$ {item?.data?.price}</b>
            </div>
        </div>
    )
}
export default Pin;
