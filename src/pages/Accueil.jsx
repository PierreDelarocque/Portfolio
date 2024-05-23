import Profil from "../image/pierre2.png";

function Acceuil() {
  return (
    <>
      <div className="accueil-container">
        <p>
          Bonjour, Je m'appelle Pierre Delarocque, développeur web et mobile
          passionné basé à Tours. Fort de plusieurs années d'expérience, je
          maîtrise des technologies telles que React, Node.js, et Javascript.
          J'ai travaillé sur divers projets, allant d'applications météo à des
          jeux vidéo en ligne, tout en utilisant des méthodes agiles comme
          SCRUM. En plus de mes compétences techniques, je suis reconnu pour mon
          dynamisme, ma créativité et ma capacité à travailler en équipe.
          Titulaire d'un Master en Sciences de l'Éducation et d'une Licence en
          Sociologie, je suis toujours en quête de nouveaux défis pour créer des
          solutions innovantes et efficaces.{" "}
        </p>

        <img className="photo-container" src={Profil} alt="" />
      </div>
    </>
  );
}
export default Acceuil;
