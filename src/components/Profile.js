import React, { useEffect } from "react"
import "./Profile.css"

function Profile({ image, name, description }) {
    // useEffect(() => {
    //     // This function runs whenever Profile mounts
    //     console.log("I AM HERE GET THE DRINKS GOING")
    // }, [])

    return (
        <div className="container">
            <img className="image" src={image} />
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Profile