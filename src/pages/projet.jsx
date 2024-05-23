import data from "../JS/projet";

function Projet() {
  return (
    <>
      {data.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <img src={data.image} alt="projet" />
          <cite>{data.descripstion} </cite>
        </div>
      ))}
    </>
  );
}
export default Projet;
