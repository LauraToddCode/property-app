import React from "react";
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

function Header(props) {
    let saved = props.savedItems
    let savedArr = saved.length > 1 ? [saved[0]] : []
    if (saved.length > 1) {
        let savedStr = saved[1].split(",")
        for (let i = 0; i < savedStr.length; i++) {
            savedArr.push(savedStr[i])
        }
        console.log(savedArr)
    }

    
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
                    Saved Properties ({savedArr})
                </Link>
            </div>
            
        </header>
    )
}

export default Header;