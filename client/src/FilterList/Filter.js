import "./filter.scss";
function Filter() {
    return (
        <div className="filter">
            <div className="top">
                <label className="">Location</label>
                <input type="text" placeholder="City Location" />
            </div>
            <div className="bottom">
                <div>
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="">Any</option>
                        <option value="Buy" >Buy</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="property">Property</label>
                    <select name="Property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="condo">Condo</option>
                        <option value="land">Land</option>
                    </select>
                </div>
                <div>
                    <label className="">Min Price</label>
                    <input type="number" placeholder="Min Price" />
                </div>
                <div>
                    <label className="">Max Price</label>
                    <input type="number" placeholder="Max Price" />
                </div>
                <div>
                    <label className="">Bedroom</label>
                    <input type="number" placeholder="Bedroom" />
                </div>

                <button>
                    <img src="/search.png" />
                </button>








            </div>
        </div>
    )
}
export default Filter;