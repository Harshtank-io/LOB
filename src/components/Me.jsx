import "../css/Me.css";
import me from "../assets/ml.svg";
export default function Me() {
  return (
    <>
      <div className="me-container">
        <div className="me-img">
          <img src={me} loading="lazy" alt="Harsh" />
        </div>
        <div className="me-text">
          <h1>Kown Me!!</h1>
          <div className="me-info">
            I am a student at Darshan Institute of Engineering and Technology,
            where I am pursuing my education in the field of Computer
            engineering. I possess a diverse set of skills and knowledge. My
            expertise lies in several programming languages including C, C++,
            Java, PHP, JavaScript, and Python.
          </div>
        </div>
      </div>
    </>
  );
}
