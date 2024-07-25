import "./card.scss";
function Card({ item }) {

    return (
        <div className="card">
            <div className="propertyImage">
                <img src={item.images[0] || "/noavatar.jpg"} />
            </div>
            <div className="propertyDetail">
                <div className="propertyName"><h3>{item.title}</h3></div>
                <div className="propertyLoc">
                    <img src="./pin.png" alt="" className="icon" />
                    <p>{item.address}</p>

                </div>
                <div className="propertyPrice">
                    <p>${item.price}</p>
                </div>
                <div className="propertyAminities">
                    <div className="Aminities">
                        <div className="bathroom">
                            <img src="./bath.png" alt="" className="icon" />
                            <p>Bathroom</p>
                        </div>
                        <div className="bedroom">
                            <img src="./bed.png" alt="" className="icon" />
                            <p>Bedroom</p>
                        </div>
                    </div>
                    <div className="icons">
                        <img src="./save.png" alt="" className="icon" />
                        <img src="./chat.png" alt="" className="icon" />
                    </div>

                </div>


            </div>
        </div>
    )
}
export default Card;