import React from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function Header() {
    return (
        <header id="header">
            <a href="/property-app" className="headerIcon">
                <HomeOutlinedIcon 
                    style={{ fontSize: 80 }}
                />
            </a>
            <h1>Prime Pad</h1>
        </header>
    )
}

export default Header;