import cv from "../image/cvdelarocque.jpg";

function Contact() {
  return (
    <>
      <div>
        <h2>Pierre Delarocque</h2>
        <p>Tours</p>
        <p>06.58.58.11.89</p>
        <p>delarocque.pierre@gmail.com</p>
        <p>https://github.com/PierreDelarocque</p>
        <p>https://www.linkedin.com/in/pierre-delarocque-972740aa/</p>
      </div>
      <div>
        <h2>Mon CV</h2>
        <img src={cv} alt="cv" />
      </div>
    </>
  );
}
export default Contact;
