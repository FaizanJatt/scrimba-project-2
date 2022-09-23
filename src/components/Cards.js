import React from "react";

export function Cards (props) {
    return (
        <div className="container">
            <img src={props.item.imageUrl}></img>
            <div className="right">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}><p>View on Google Maps</p></a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <p className="date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="description">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}