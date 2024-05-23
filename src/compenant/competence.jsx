import data from "../JS/competence";

function Competence() {
  return (
    <div className="competence-container">
      <h2 className="title-h2"> Mes Compétences</h2>
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
