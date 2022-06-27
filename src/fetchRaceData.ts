import axios from "axios";

export async function fetchRaceData() {
    const standingsResponse = await axios.get("https://ergast.com/api/f1/drivers/max_verstappen/driverStandings.json")
    const standingsList = standingsResponse.data.MRData.StandingsTable.StandingsLists
    const standingsData = organiseStandings(standingsList)

}


function organiseStandings(championshipHistory: any[]) {
    let championshipWins = 0
    let raceWins = 0
    let totalPoints = 0
    for (const seasonData of championshipHistory) {
        const season = seasonData.DriverStandings
        season.position === 1 && championshipWins++
        raceWins += season.wins
        totalPoints += season.points
    }
    return { championshipWins: championshipWins, raceWins: raceWins, totalPoints: totalPoints }
}