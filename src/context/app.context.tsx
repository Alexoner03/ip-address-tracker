import {createContext, ReactNode, useState} from "react";
import {GeoIPResponse} from "../services/types";


const initialValue = {
    isp: "",
    domains: [],
    location: {
        city: "",
        country: "",
        lat: -12.0262676,
        lng: -77.1278633,
        geonameId: 0,
        postalCode: "",
        region: "",
        timezone: ""
    },
    ip: "",
    as: {
        type: "",
        asn: 0,
        domain: "",
        name: "",
        route: ""
    }
}

interface Props {
    children: ReactNode
}

export interface GeoIpContextType {
    geoIp: GeoIPResponse,
    setGeoIp: (geoIp: GeoIPResponse) => void
}

export const AppContext = createContext({});

export function ContextProvider({children}: Props) {
    const [geoIp, setGeoIp] = useState<GeoIPResponse>(initialValue);
    return (
        <AppContext.Provider value={{geoIp, setGeoIp}}>
            {children}
        </AppContext.Provider>
    )
}