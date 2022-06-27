import axios from "axios";

export async function fetchBio() {
    const response = await axios.get("https://ergast.com/api/f1/drivers/max_verstappen.json")
    const data = response.data.MRData.DriverTable.Drivers[0]
    const bioData = {
        name: `${data.givenName} ${data.familyName}`,
        dob: data.dateOfBirth,
        nationality: data.nationality,
        num: data.permanentNumber,
        code: data.code,
        info: data.url
    }
    return bioData
}