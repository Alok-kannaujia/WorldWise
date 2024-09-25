// import AppNav from "../components/AppNav";
import Map from "../components/Map";
import SideBar from "../components/Sidebar";
import User from "../components/User";
import Search from "../components/Search";
import styles from "./AppLayout.module.css";

import { useEffect, useState } from "react";
function AppLayout() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [svalue, setSValue] = useState("");

  // const navigate = useNavigate();
  //   https://geocode.maps.co/search?q=&api_key=66d860c56d4b3120621162zqy06d5a9
  const BASE_URL = "https://geocode.maps.co/search?q";
  const API_KEY = "66d860c56d4b3120621162zqy06d5a9";

  useEffect(
    function () {
      const timer = setTimeout(() => Place(), 200);

      return () => clearTimeout(timer);
    },
    [query]
  );
  async function Place() {
    const res = await fetch(`${BASE_URL}=${query}&api_key=${API_KEY}`);
    const data = await res.json();
    setPlaces(data);
  }

  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <Search
        query={query}
        setQuery={setQuery}
        svalue={svalue}
        setSValue={setSValue}
        obj={places}
      />
      <User />
    </div>
  );
}

export default AppLayout;
