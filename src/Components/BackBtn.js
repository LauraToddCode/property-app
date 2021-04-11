import React from "react";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Item() {
    let history = useHistory();
    return (
          <button onClick={() => history.goBack()} id="backBtn">
            <ArrowBackIcon /> <span>go back</span>
          </button>
    );
};

export default Item