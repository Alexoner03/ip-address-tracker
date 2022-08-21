import "./Info.css"
import {GeoIPResponse} from "../../services/types";

enum infoPosition {
    initial,
    final,
    middle
}


interface infoDetails {
    title: string
    value: string,
    position: infoPosition
}

function InfoItem(props: infoDetails) {

    let className = "infoItem ";

    switch (props.position) {
        case infoPosition.initial:
            className += "info-item-initial";
            break;
        case infoPosition.final:
            className += "info-item-final";
            break;
        case infoPosition.middle:
            className += "info-item-middle";
            break;
    }

    return (
        <div className={className}>
            <p className={"title"}>{props.title}</p>
            <p className={"value"}>{props.value}</p>
        </div>
    )
}

function Info(props: { GeoIPResponse: GeoIPResponse }) {

    const {GeoIPResponse} = props
    const infoDetails: infoDetails[] = [
        {title: "ip address", value: GeoIPResponse.ip, position: infoPosition.initial},
        {
            title: "location",
            value: `${GeoIPResponse.location.country}, ${GeoIPResponse.location.region}, ${GeoIPResponse.location.city}`,
            position: infoPosition.middle
        },
        {title: "timezone", value: `UTC ${GeoIPResponse.location.timezone}`, position: infoPosition.middle},
        {title: "isp", value: GeoIPResponse.isp, position: infoPosition.final},
    ]

    return (
        <div className="info">
            {
                infoDetails.map((item, index) => {
                    return (
                        <InfoItem key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

export default Info