import data from "../JS/competence";

function Competence() {
  return (
    <div className="competence-container">
      <h1>Mes Compétences</h1>
      <div className="comp-container">
        {data.map((data) => (
          <section className="logo-container" key={data.name}>
            <h2>{data.name} </h2>
            <img className="img-logo" src={data.image} alt="" />
          </section>
        ))}
      </div>
    </div>
  );
}
export default Competence;
