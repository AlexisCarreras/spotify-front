import React from "react";

export default function Artist({id, name, url}){
    return <div>
        <h1>{name}</h1>
        <h4>{id}</h4>
        <img alt = {name} src={url} />
    </div>
}