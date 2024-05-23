import data from "../JS/projet";
import { useState } from "react";
function Projet() {
  const [filterChoise, setFilterChoise] = useState("");
  return (
    <>
      <select onChange={(e) => setFilterChoise(e.target.value)}>
        <option value="">All</option>
        {data.map((projet) => (
          <option key={projet.id} value={projet.name}>
            {projet.name}
          </option>
        ))}
      </select>
      {data
        .filter((theme) => theme.name === filterChoise || !filterChoise)
        .map((data) => (
          <div className="projet-container" key={data.id}>
            <img className="img-container" src={data.image} alt="projet" />
            <cite>{data.description} </cite>
            <cite>{data.compétence} </cite>
          </div>
        ))}
    </>
  );
}
export default Projet;
