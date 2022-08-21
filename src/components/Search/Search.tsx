import Banner from "../../assets/banner.png"
import "./Search.css"
import Form from "../Form/Form";
import React, {useContext} from "react";
import Info from "../Info/Info";
import {AppContext, GeoIpContextType} from "../../context/app.context";

function Search() {

    const {geoIp} = useContext(AppContext) as GeoIpContextType

    return (
        <div style={{backgroundImage: `url(${Banner})`}} className="search">
            <p className="search__name">IP Address Tracker</p>
            <Form/>
            <Info GeoIPResponse={geoIp}/>
        </div>
    );
}

export default Search