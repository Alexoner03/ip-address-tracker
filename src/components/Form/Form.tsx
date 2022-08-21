import "./Form.css"
import React, {FormEvent, useContext} from "react";
import IpfyService from "../../services/ipfy.service";
import {AppContext, GeoIpContextType} from "../../context/app.context";
import {GeoIPResponse} from "../../services/types";
import ipRegex from 'ip-regex';


async function handleSubmit(e: FormEvent<HTMLFormElement>, setGeoIp: (g: GeoIPResponse) => void) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        ipAddress: { value: string }
    }
    const ipAddress = target.ipAddress.value;
    const isValid = ipRegex({exact: true}).test(ipAddress);
    if (!isValid) {
        alert("Invalid IP address");
        return
    }
    const response = await IpfyService.getGeoIP(ipAddress)
    setGeoIp(response)
}

function Form() {
    const {setGeoIp} = useContext(AppContext) as GeoIpContextType

    return (
        <form className="form" onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmit(event, setGeoIp)}>
            <input type="text" name={"ipAddress"} placeholder="Search for any IP address"/>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </form>
    )
}

export default Form