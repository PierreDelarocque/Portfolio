import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import data from "../JS/competence";

function Competence() {
  return (
    <div className="competence-container">
      <h2 className="title-h2">Mes Compétences</h2>
      <Swiper
        slidesPerView={4} // Nombre d'éléments visibles
        spaceBetween={1} // Espace entre les éléments
        loop={true} // Pour un effet infini
        pagination={{ clickable: true }} // Pagination (points en bas)
        navigation={true} // Flèches de navigation
        autoplay={{ delay: 2500, disableOnInteraction: false }} // Défilement auto
        modules={[Pagination, Navigation, Autoplay]} // Modules Swiper
        className="competence-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="logo-container">
            <img className="img-logo" src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Competence;
