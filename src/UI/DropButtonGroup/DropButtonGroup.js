import React from "react";

import './DropButtonGroup.css'

import DropButton from "./DropButton/DropButton";

const DropButtonGroup = () => {
    return(
        <div className="DropButtonGroup">
            <DropButton></DropButton>
            <DropButton></DropButton>
            <DropButton></DropButton>
        </div>
    )
}

export default DropButtonGroup