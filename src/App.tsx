import { useEffect } from "react";
import { fetchBio } from "./fetchBio";
import { fetchRaceData } from "./fetchRaceData";
import { Header } from "./Header";
import { Statistics } from "./Statistics";

function App(): JSX.Element {

  useEffect(() => {
    async function fetchAllData() {
      const bioData = await fetchBio()
      const raceData = await fetchRaceData()
      return "hello"
    }
    fetchAllData()
  }, [])

  return (
    <>
      <Statistics />
      <Header />
    </>);
}

export default App;
