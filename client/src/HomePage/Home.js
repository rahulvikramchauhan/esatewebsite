import "./home.scss"
import SearchBar from "../SearchBar/SearchBar";
const Home = function () {
    return (
        <div className="home">
            <div className="textContainer">
                <div className="wrapper">
                    <h1>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                </div>



                <div className="searchBar"><SearchBar /></div>


                <div className="boxes">
                    <div>
                        <h2>16+</h2>
                        <p>Years Of Experience</p>
                    </div>
                    <div>
                        <h2>200</h2>
                        <p>Award Gain</p>
                    </div>
                    <div>
                        <h2>1200+</h2>
                        <p>Property Ready</p>
                    </div>

                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" />
                <h1>image container</h1>
            </div>

        </div>
    )
}
export default Home;