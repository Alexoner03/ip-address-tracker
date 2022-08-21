import {GeoIPResponse} from "./types";

const apiKey = "at_3f22YIDoLI7rjVe5xAtrC0HpJtxNj"
const url = "https://geo.ipify.org/api/v2/country,city"

export default  {
    async getGeoIP(ipAddress: string): Promise<GeoIPResponse> {
        const responseRaw = await fetch(`${url}?apiKey=${apiKey}&ipAddress=${ipAddress}`);
        return await responseRaw.json() as GeoIPResponse;
    }
}