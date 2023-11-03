import React from "react";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import {useCities} from "../contexts/CitiesContext"

function CityList() {

  const {cities, isLoading} = useCities();

  if (isLoading) return <Spinner />;

  if (cities !== undefined && !cities.length)
    return (
      <Message message="Adicione sua primeira cidade clicando em uma cidade no mapa." />
    );

  return (
    <ul className={styles.cityList}>
      {cities !== undefined &&
        cities.length > 0 &&
        cities.map((city) => <CityItem city={city} key={city.id} />)}
    </ul>
  );
}

export default CityList;
