import Competence from "../compenant/competence";
import Profil from "../image/pierre2.png";

function Acceuil() {
  return (
    <>
      <div className="accueil-container">
        <p>
          <h1>Pierre Delarocque</h1>
          <h3>Développeur Web/Web mobile Full Stack</h3>
          Bonjour, Je m'appelle Pierre Delarocque, développeur web et mobile
          passionné basé à Tours. Je maîtrise des technologies telles que React,
          Node.js, et Javascript. J'ai travaillé sur divers projets, allant
          d'applications météo à des jeux vidéo en ligne, tout en utilisant des
          méthodes agiles comme SCRUM. En plus de mes compétences techniques, je
          suis reconnu pour mon dynamisme, ma créativité et ma capacité à
          travailler en équipe.{" "}
        </p>

        <img className="photo-container" src={Profil} alt="" />
      </div>
      <Competence />
    </>
  );
}
export default Acceuil;
