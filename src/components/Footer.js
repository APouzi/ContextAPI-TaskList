import React from 'react'

const Footer = () => {
    var style = {
        backgroundColor: "#08b6b6",
        color: "white",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "50px",
        width: "100%",
    };
    return(
        <div style = {style}> Task List, made by Alexandre Pouzikov 2021</div>
    )
}

export default Footer