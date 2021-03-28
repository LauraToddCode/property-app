import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { connect } from "react-redux";


function Header({ savedItems }) { 

    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        setSavedCount(savedItems.length);
    }, [savedItems, savedCount])

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
                <Link to="/saved" id="headerSaved">
                    Saved Properties ({savedCount})
                </Link>
            </div>
            
        </header>
    )
}

const mapStateToProps = state => {
    return {
        savedItems: state.save.savedItems
    }
}

export default connect(mapStateToProps)(Header);