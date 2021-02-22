import React from "react";
import { Link } from "react-router-dom";

class ToggleViewNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ListViewSelected: true,
            MapViewSelected: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        if (event.target.id == "listViewLink") {
            this.setState({
                ListViewSelected: true,
                MapViewSelected: false
            })
        } else if (event.target.id == "mapViewLink") {
            this.setState({
                ListViewSelected: false,
                MapViewSelected: true
            })
        }
        console.log("list view selected:" + this.state.ListViewSelected)
        console.log("map view selected:" + this.state.MapViewSelected)
    }

    render() {
        const { ListViewSelected, MapViewSelected } = this.state
        const listTabClass = ListViewSelected == true ? "tabFocus" : "tabBlur"
        const mapTabClass = MapViewSelected == true ? "tabFocus" : "tabBlur"



        return (
            <div className="navToggles">
                <div className={listTabClass + " navTab"} id="listViewLink" onClick={this.handleClick}>
                    <Link to="/property-app" className="navToggleLinks">List View</Link>
                </div>
                <div className={mapTabClass + " navTab"} id="mapViewLink" onClick={this.handleClick}>
                    <Link to="/map-view" className="navToggleLinks">Map View</Link>
                </div>
            </div>
        )
    }
}

export default ToggleViewNav