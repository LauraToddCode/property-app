import React from "react";
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function Header(props) {
    return (
        <header id="header">
            <div id="title">
                <a href="/property-app" className="headerIcon">
                    <HomeOutlinedIcon 
                        style={{ fontSize: 80 }}
                    />
                </a>
                <h1>Prime Pad</h1>
            </div>
            <div id="savedLinkCont">
                <Link to="/saved-properties" id="headerSaved">
                    Saved Properties ({props.savedItems.length - 1})
                </Link>
            </div>
            
        </header>
    )
}

export default Header;