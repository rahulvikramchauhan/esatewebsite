import { useState } from "react";
import "./searchbar.scss"
const SearchBar = function () {
    const buttonType = ["Buy", "Rent"];
    const [type, setType] = useState("Buy")
    function switchTab(el) {
        if (type !== el.target.textContent) {
            setType(el.target.textContent)
        }
    }

    return (
        <div >
            <div>
                {buttonType.map(function (el, index) {
                    return (<button key={index} className={el == type ? "active" : ""} onClick={switchTab}>{el}</button>)
                })}
            </div>


            <div className="form">
                <input type="text" placeholder="City Location" />
                <input type="number" placeholder="Min Price" />
                <input type="number" placeholder="Max Price" />
                <div className="searchLogo">
                    <img src="./search.png" alt="searchlogo" />
                </div>

            </div>
        </div>
    )
}
export default SearchBar;